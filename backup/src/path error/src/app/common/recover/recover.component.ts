
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common/service/user.service';
import { User } from '../../common/service/user';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css'] ,
})
export class RecoverComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
      
  }

  
 
  model = new User();

  SendEmail(){
  this.userService
    .SendEmail(this.model)

   .subscribe(
                (data) => {
                alert("Check Email Inbox")
                    this.router.navigate(['/login']);

                },
            );

  }
 
  


forgetPas(){
 this.router.navigate(['/admin-recover']);
}



}
