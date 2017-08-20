import * as Public from '../indexes';
import { Routes, RouterModule } from '@angular/router';


export const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Public.LoginComponent },
        { path: 'register', component: Public.RegisterComponent },
           { path: 'admin-recover', component: Public.RecoverComponent },
];