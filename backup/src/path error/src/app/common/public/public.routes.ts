import { LoginComponent } from './../../common/login';
import { RegisterComponent } from './../../common/register';
import { Routes, RouterModule } from '@angular/router';
 //import { UserService } from 'app/common/service/user.service';
import { RecoverComponent } from './../../common/recover';

export const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
           { path: 'admin-recover', component: RecoverComponent },
];