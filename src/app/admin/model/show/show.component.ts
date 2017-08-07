import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Service } from '../service/service';
import { Model } from '../service/model';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _service: Service
  ) { }

  ngOnInit() {
    this.getSingleModel();
  }
  model:Model;
  getSingleModel(){
    var id = this.route.snapshot.params['id'];
    this._service
      .show(id)
      .subscribe(model =>{
          this.model = model[0];
          })
  };

  goBack(){
    this.router.navigate(['/admin/model/index']);
  }
}
