import { Create } from '../model/indexes';
import { Index } from '../model/indexes';
import { Edit } from '../model/indexes';
import { Show } from '../model/indexes';



import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../../common/auth.guard';

export const SECURE_ROUTES_MODEL: Routes = [
    {path:"admin/model/create", component:Create},
    {path:"admin/model", component:Index , canActivate: [AuthGuard] },
    {path:"admin/model/:id/edit", component:Edit},
    {path:"admin/model/:id", component:Show},
  ];