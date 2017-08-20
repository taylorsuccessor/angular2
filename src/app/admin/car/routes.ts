import { Create } from '../car/indexes';
import { Index } from '../car/indexes';
import { Edit } from '../car/indexes';
import { Show } from '../car/indexes';



import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../../common/auth.guard';

export const SECURE_ROUTES_MODEL: Routes = [
    {path:"admin/car/create", component:Create},
    {path:"admin/car", component:Index , canActivate: [AuthGuard] },
    {path:"admin/car/:id/edit", component:Edit},
    {path:"admin/car/:id", component:Show},
  ];