
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common/service/user.service';
import { User } from '../../common/service/user';
import {ActivatedRoute, Params, Router} from '@angular/router';
// import { AlertService } from '../../common/service/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
//  styleUrls: ['./login.component.css'] ,
})
export class LoginComponent implements OnInit {
newTrustFormVisible: false;
 loading = false;
  alert= false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
//    private alertService: AlertService,
  ) { }

  ngOnInit() {

  }

  model = new User();
/*
  loginUser() {
  // console.log(" somthing error in data ");
 // newTrustFormVisible: true;
  this.userService
   
    .loginUser(this.model)

   .subscribe
                (data => {
                    this.router.navigate(['/admin/car']);
                alert(data);
                });
           //     error => {
                 //   this.userService.error();
               //     this.newTrustFormVisible = false;
            //    }
  }
*/
  login() {
        this.loading = true;
        this.userService.login(this.model.email, this.model.password)

            .subscribe(
                data => {
                          if (data.status == 'success') {
                     this.loading = false;
                    this.router.navigate(['/admin/car']);
                }
                else  if (data.status == 'error') {
                             this.router.navigate(['/login']); 
                             this.alert = true;
                          }
                },
                error => {
                 //   this.alertService.error(error);
                 // alert("not found");
                    this.loading = false;
               }
              );
    }
  
  
  
   goBack() {
    this.router.navigate(['/register']);
  }

forgetPas() {
 this.router.navigate(['/admin-recover']);
}

ref(){
    this.router.navigate(['/login']);
   this.loading = false;
  this.alert=false;
  }

}
