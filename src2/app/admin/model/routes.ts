import { CreateComponent } from '../model/create';
import { IndexComponent } from '../model/index';
import { EditComponent } from '../model/edit';
import { ShowComponent } from '../model/show';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../../common/auth.guard';

export const SECURE_ROUTES_MODEL: Routes = [
    {path:"admin/model/create", component:CreateComponent},
    {path:"admin/model/index", component:IndexComponent , canActivate: [AuthGuard] },
    {path:"admin/model/:id/edit", component:EditComponent},
    {path:"admin/model/:id", component:ShowComponent},
  ];