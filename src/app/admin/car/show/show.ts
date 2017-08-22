import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Service } from '../service/service';
import { Model } from '../service/model';
@Component({
  selector: 'app-show',
  templateUrl: './show.html',
//  styleUrls: ['./show.component.css']
})
export class Show implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _service: Service
  ) { }
  models:any;
  ngOnInit() {
    this.getSingleModel();
      this.getAllList();
  }
  model: Model;
  getSingleModel() {
    var id = this.route.snapshot.params['id'];
    this._service
      .show(id)
      .subscribe(model => {
          this.model = model[0];
          } )
  };

  goBack() {
    this.router.navigate(['/admin/car']);
  }
    delete(id) {
      this._service
        .delete(id)
        .subscribe(() => {
        this.getAllList();
     //   alert("delete");
      } )
  }

    getAllList() {
     this._service
        .getAllList()
        .subscribe(models => {
          this.models = models;
// this.goBack();
      } )
  }

}
