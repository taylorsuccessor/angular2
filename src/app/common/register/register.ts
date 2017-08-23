import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common/service/user.service';
import { User } from '../../common/service/user';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  // styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
newTrustFormVisible= false;
  alert=false;
user:any;
    constructor(
    private userService: UserService,
     private router: Router) { }

  ngOnInit() {
  }

model = new User();
  /*
 addUser(){
    this.userService
    .addUser(this.model)
 .subscribe(
                data => {
                  this.newTrustFormVisible = true;
                 this.user= data;
           this.userService.success('the register success');
               this.router.navigate(['/login']);
                },
                error => {
                   console.log("the user already register");
                   this.userService.success('the register exist');
             this.newTrustFormVisible = false;
                },

                );
}
   */
  
   addUser() {
        this.newTrustFormVisible = true;
        this.userService.addUser(this.model.user, this.model.email, this.model.password, this.model.repassword)

            .subscribe(
                data => {
                          if (data.status == 'success') {
                     this.newTrustFormVisible = false;
                    this.router.navigate(['/admin/car']);
                }
                else  if (data.status == 'error') {
                             this.router.navigate(['/register']); 
                         this.alert = true;
                          }
                },
                error => {
                 //   this.alertService.error(error);
                 // alert("not found");
                    this.newTrustFormVisible = false;
               }
              );
    }
  
  
  
  goBack(){
    this.router.navigate(['/login']);
  }
  
  
ref(){
    this.router.navigate(['/register']);
   this.newTrustFormVisible = false;
  this.alert=false;
  }

}
