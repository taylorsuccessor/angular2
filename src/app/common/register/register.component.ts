import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common/service/user.service';
import { User } from '../../common/service/user';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  // styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
newTrustFormVisible: false;
user:any;
    constructor(
    private userService: UserService,
     private router: Router) { }

  ngOnInit() {
  }

model = new User();
 addUser(){
// this.newTrustFormVisible = true;
    this.userService
    .addUser(this.model)
 .subscribe(
                data => {
                 this.user= data;
             console.log(data);
           this.userService.success('the register success');
               this.router.navigate(['/home']);
                },
                error => {
                   console.log("the user already register");
                   this.userService.success('the register exist');
             this.newTrustFormVisible = false;
                },

                );
     
}
  goBack(){
    this.router.navigate(['/login']);
  }

}
