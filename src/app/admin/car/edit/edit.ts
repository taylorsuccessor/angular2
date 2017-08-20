import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Service } from '../service/service';
import { Model } from '../service/model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.html',
//  styleUrls: ['./edit.component.css']
})
export class Edit implements OnInit {

   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _service: Service
  ) { }
  models:any;
  ngOnInit() {
      this.getSingleModel();
      this.models = {
        r1: this.rs[0].value, // default to Female
   }

  }

  //model:any={};
  model = new Model();
  id = this.route.snapshot.params['id'];
  getSingleModel(){
    
    this._service
      .show(this.id)
      .subscribe(model =>{
          this.model = model[0];
          })
  };
  
  edit(){
      this._service
        .edit(this.model)
        .subscribe(()=> this.goBack());
  }
 
   goBack(){
    this.router.navigate(['/admin/car']);
  }
  public rs = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
];
}
