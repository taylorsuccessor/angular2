import { HomeShopComponent } from 'app/admin/shop/home';
import { AddShopComponent } from './../shop/add';
import { EditShopComponent } from './../shop/edit';
import { ShowShopComponent } from './../shop/show';


import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../../common/auth.guard';

export const SECURE_ROUTES: Routes = [
    { path: 'home', component: HomeShopComponent, canActivate: [AuthGuard] },
     {path:"add", component:AddShopComponent},
  {path:"edit/:id", component:EditShopComponent},
  {path:"show/:id", component:ShowShopComponent},

  ];