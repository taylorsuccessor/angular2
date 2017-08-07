import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';
import { Model } from '../service/model';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private _service: Service,
     private router: Router) { }

  ngOnInit() {
      this.model = {
        r1: this.rs[0].value, // default to Female
    }

  }

model = new Model();
  create(){
      this._service
        .create(this.model)
        .subscribe(()=>  this.router.navigate(['/admin/model/index']));
  }
   goBack(){
    this.router.navigate(['/admin/model/index']);
  }
  public rs = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
];
}