import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../common/auth.guard';
import { PublicComponent, PUBLIC_ROUTES } from './common/public';

import { SecureComponent } from 'app/admin/secure';
import { SECURE_ROUTES_MODEL } from 'app/admin/model/routes';
/**
 * Route constant 
 */
const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
     { path: '', component: SecureComponent,canActivate: [AuthGuard],  data: { title: 'Secure Views' }, children: SECURE_ROUTES_MODEL },

    { path: '**', redirectTo: 'login' }


];

/**
 * App routing module
 */
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
