import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop/service/shop.service';
import { Shop } from '../../shop/service/shop';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-addShop',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddShopComponent implements OnInit {

  constructor(
    private shopService: ShopService,
     private router: Router) { }

  ngOnInit() {
  }

model = new Shop();
  addShop(){
      this.shopService
        .addShop(this.model)
        .subscribe(()=>  this.router.navigate(['/home']));
  }
   goBack(){
    this.router.navigate(['/home']);
  }
}