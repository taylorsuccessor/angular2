import { CreateComponent } from '../model/indexes';
import { IndexComponent } from '../model/indexes';
import { EditComponent } from '../model/indexes';
import { ShowComponent } from '../model/indexes';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../../common/auth.guard';

export const SECURE_ROUTES_MODEL: Routes = [
    {path:"admin/model/create", component:CreateComponent},
    {path:"admin/model", component:IndexComponent , canActivate: [AuthGuard] },
    {path:"admin/model/:id/edit", component:EditComponent},
    {path:"admin/model/:id", component:ShowComponent},
  ];