import * as Car from '../car/indexes';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../../common/auth.guard';

export const SECURE_ROUTES_MODEL: Routes = [
    {path:"admin/car/create", component:Car.Create},
    {path:"admin/car", component:Car.Index , canActivate: [AuthGuard] },
    {path:"admin/car/:id/edit", component:Car.Edit},
    {path:"admin/car/:id", component:Car.Show},
  ];