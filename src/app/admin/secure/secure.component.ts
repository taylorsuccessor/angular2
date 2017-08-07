import { Component, OnInit } from '@angular/core';
import { ShopService } from 'app/admin/shop/service/shop.service';
import { Shop } from 'app/admin/shop/service/shop';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { CarService } from 'app/admin/car/service/car.service';
import { Car } from 'app/admin/car/service/car';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
term$ = new Subject<string>();
  constructor(
    private shopService:ShopService,
    
  ) { }

    shopes:any;
  ngOnInit() {
  }
  m = new Shop();
  getByFilter(term: string){
   // this.shopService.getByFilter(term)
   
 alert("su")
  }

}
