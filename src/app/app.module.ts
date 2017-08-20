import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Apps/app.component';

// Layout
import { PublicComponent } from './common/public';

//array



 import { ArrayModel } from './admin/car/component'; 
var am:ArrayModel =new ArrayModel()
var model= am.getArrModel();
var ModelService=am.getArrMService();

//Public Component
import { LoginComponent } from './common/login';
import { RegisterComponent } from './common/register';
import { UserService } from './common/service/user.service';
import { RecoverComponent } from './common/recover';

// Common
import { AuthGuard } from './../common/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent,
    RegisterComponent,
    RecoverComponent,
    PublicComponent,

  model,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard,UserService,ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
