import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';
import { Model } from '../service/model';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private _service:Service,
    private router: Router
   ) { }
  models:any;
  ngOnInit() {
    this.getAllList();
  }
  getAllList(){
     this._service
        .getAllList()
        .subscribe(models => {
          this.models = models;
      } )
  }
  delete(id){
      this._service
        .delete(id)
        .subscribe(() => {
        this.getAllList();
      } )
  }

 

}


 
