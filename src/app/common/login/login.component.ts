
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common/service/user.service';
import { User } from '../../common/service/user';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] ,
})
export class LoginComponent implements OnInit {
newTrustFormVisible: false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
      
  }

  
 
  model = new User();

  loginUser(){
  //console.log("somthing error in data ");
 // newTrustFormVisible: true;
  this.userService
    .loginUser(this.model)

   .subscribe(
                (data) => {
                    this.router.navigate(['/home']);
                },
           //     error => {
                 //   this.userService.error();
               //     this.newTrustFormVisible = false;
            //    }
            );

  }
 
  
   goBack(){
    this.router.navigate(['/register']);
  }





}
