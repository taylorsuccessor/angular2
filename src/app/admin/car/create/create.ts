import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';
import { Model } from '../service/model';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.html',
 // styleUrls: ['./create.component.css']
})
export class Create implements OnInit {

  constructor(
    private _service: Service,
     private router: Router) { }
  models:any;
  ngOnInit() {
      this.models = {
        r1: this.rs[0].value, // default to Female
      //   car: this.cars[0], // default to Female
   }

  }

model = new Model();
  create(){
      this._service
        .create(this.model)
        .subscribe(()=>  this.router.navigate(['/admin/car']));
  }
   goBack(){
    this.router.navigate(['/admin/car']);
  }
  public rs = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
];
//  public cars = [
 //   { value: 'volo', display: 'volo' },
//    { value: 'cart', display: 'cart' }
//];
}