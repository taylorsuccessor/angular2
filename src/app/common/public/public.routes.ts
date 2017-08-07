import { LoginComponent } from './../../common/login';
import { RegisterComponent } from './../../common/register';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from 'app/common/service/user.service';


export const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
];