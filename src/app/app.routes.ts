import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'homepage', component: HomepageComponent},
    {path: 'ticket/:id', component: TicketDetailComponent},
    {path: 'profile', component: UserProfileComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'}
]
;
