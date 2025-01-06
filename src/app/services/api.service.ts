import { Injectable } from "@angular/core";
import { environment } from "../../environments/enviroment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient, private cookieService: CookieService) {}

    registerUser(data: { email: string, username: string, password: string }): Observable<any> {
        return this.http.post(`${this.apiUrl}/auth/register`, data)
          .pipe(
            catchError(this.handleError)
          );
      }

      loginUser(data: {email: string, password: string}): Observable<any> {
        return this.http.post(`${this.apiUrl}/auth/login`, data, {observe: 'response'})
            .pipe(
                tap(response => {
                    console.log('Login response:', response); // Log the response
                  }),
            )
      }

      verifyOtp(data: { email: string, otp: string }): Observable<any> {
        return this.http.post(`${this.apiUrl}/auth/verify`, data, { observe: 'response' })
          .pipe(
            tap((response: any) => {
              console.log('Verify OTP response:', response); 
              const token = response.body?.token;
              if (token) {
                this.cookieService.set('authToken', token); 
              }
            }),
            catchError(this.handleError)
          );
      }
    
      
      getUserProfile(): Observable<any> {
        const authToken = this.cookieService.get('authToken');
        return this.http.get(`${this.apiUrl}/profile`, {
            headers: {
              'Authorization': `Bearer ${authToken}`
            },
            withCredentials: true
          });
      }

      private handleError(error: HttpErrorResponse): Observable<never> {
        let errorMessage = 'An unknown error occurred!';
    
        if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side error
            switch (error.status) {
                case 400:
                    errorMessage = 'Username or Password incorrect';
                    break;
                case 401:
                    errorMessage = 'Unauthorized access';
                    break;
                case 404:
                    errorMessage = 'Resource not found';
                    break;
                case 500:
                    errorMessage = 'Internal server error';
                    break;
                default:
                    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
        }
    
        console.error('API Error:', errorMessage);
        return throwError(() => new Error(errorMessage)); // Throw an Error instance with the custom message
    }
    
}