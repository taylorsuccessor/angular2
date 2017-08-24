import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';
import { Model } from '../service/model';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component ({
  selector: 'app-arch',
  template: `

     <ul *ngFor="let model of models, let i=index ">
    <div *ngIf="model.type==2"> 
                         <li>
                                <a href="#">
                                    <div>
                                        <p> <strong>{{model.type}} : {{model.msg | uppercase}}</strong> </p>
                                        <div class="progress progress-striped active">
                                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"> <span class="sr-only">40% Complete (success)</span> </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="divider"></li>
                        </div>
</ul>
  
`,
})
export class Archef implements OnInit {

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
