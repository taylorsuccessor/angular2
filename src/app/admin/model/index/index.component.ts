import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';
import { Model } from '../service/model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterArrayPipe } from '../index/pipes.pipe';
import * as _ from 'underscore';

import { PagerService } from '../index/pager.service';

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
     private pagerService: PagerService,
   ) { }
  models:any;
 private allItems: any[];

    // pager object
    pager: any = {};


  ngOnInit() {
    this.getAllList();
    
         this._service
        .getAllList()
            .subscribe(data => {
                // set items to json response
                this.allItems = data;

                // initialize to page 1
                this.setPage(1);
            });
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


      setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.models = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
  
  fun(){
  let i=6+4;
    return i;
  }
  public sum(){
  this._service
        .getAllList()
        .subscribe(models => {
      return     models+1;
         
      } )
   
  }

}

 
