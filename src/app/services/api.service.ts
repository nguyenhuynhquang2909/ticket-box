import { Injectable } from "@angular/core";
import { environment } from "../../environments/enviroment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) {}

    registerUser(data: { email: string, username: string, password: string }): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, data)
          .pipe(
            catchError(this.handleError)
          );
      }

    loginUser(data: { email: string, password: string }): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, data)
          .pipe(
            catchError(this.handleError)
          );
      }
    
      private handleError(error: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred!';
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
      }
}