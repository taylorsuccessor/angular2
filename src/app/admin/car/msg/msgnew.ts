import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';
import { Model } from '../service/model';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component ({
  selector: 'app-msg',
  template:  `
                         <ul *ngFor="let model of models, let i=index ">
                  <div *ngIf="model.type ==1">
                  
                              <li>
                                <div class="message-center">
                                    <a href="#">
                                        <div class="user-img"> <img src="style/plugins/images/users/pawandeep.jpg" alt="user" class="img-circle"> <span class="profile-status online pull-right"></span> </div>
                                        <div class="mail-contnet">
                                <span class="mail-desc"><h5> {{model.type}} : {{model.msg | uppercase}}</h5></span> <span class="time">9:30 AM</span> </div>
                                    </a>
                                </div>
                            </li>
                   </div>
                   
                   
            </ul>
`,
})
export class Msgnew implements OnInit {

  constructor(
    private _service: Service,
    private router: Router,

   ) { }
  models:any;

  ngOnInit() {
    this.getMsg();

  }
  getMsg() {
     this._service
        .getMsg()
        .subscribe(models => {
          this.models = models.rows;
      } )
  }


  }
