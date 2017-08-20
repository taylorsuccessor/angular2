import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Apps/app.component';

//array
 import { ArrayModel } from './admin/car/component'; 
var am:ArrayModel =new ArrayModel()
var model= am.getArrModel();
var ModelService=am.getArrMService();

//Public Component
import * as Public from './common/indexes';

// Common
import { AuthGuard } from './../common/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    Public.LoginComponent,
    Public.RegisterComponent,
   Public.RecoverComponent,
    Public.PublicComponent,
  model,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard,Public.UserService,ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
