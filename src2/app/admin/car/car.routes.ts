import { AddCarComponent } from './../car/add';
import { HomeCarComponent } from './../car/home';
import { EditCarComponent } from './../car/edit';
import { ShowCarComponent } from './../car/show';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../../common/auth.guard';

export const SECURE_ROUTESCar: Routes = [
    {path:"addc", component:AddCarComponent},
    {path:"homec", component:HomeCarComponent , canActivate: [AuthGuard] },
    {path:"editc/:id", component:EditCarComponent},
    {path:"showc/:id", component:ShowCarComponent},
  ];