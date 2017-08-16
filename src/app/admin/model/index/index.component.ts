import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';
import { Model } from '../service/model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterArrayPipe } from '../index/pipes.pipe';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
     //pipes: [FilterArrayPipe]
})
export class IndexComponent implements OnInit {

  constructor(
    private _service:Service,
    private router: Router,
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

sortType(sort:string){
  if(sort=='name'){
  this.models=this.models.sort(this.SortByName);
  alert("sort name");
  }
    if(sort=='num'){
  this.models=this.models.sort(this.SortByNum);
  alert("sort number");
  }
      if(sort=='status'){
  this.models=this.models.sort(this.SortByStatus);
  alert("sort status");
  }
}
SortByName(n1:Model, n2:Model){
  if(n1.name> n2.name)
  return 1
  else   if(n1.name == n2.name)
  return 0
  else 
  return -1
}
SortByNum(n1:Model, n2:Model){
 return (n1.num) -(n2.num)
}
 SortByStatus(n1:Model, n2:Model){
  if(n1.area> n2.area)
  return 1
  else   if(n1.area == n2.area)
  return 0
  else 
  return -1
}

sum(){
  let i=8+8;
  return i;
}


 
