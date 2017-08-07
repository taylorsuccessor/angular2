import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ShopService } from '../../shop/service/shop.service';
import { Shop } from '../../shop/service/shop';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowShopComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shopService: ShopService
  ) { }

  ngOnInit() {
    this.getSingleShop();
  }
  shop:Shop;
  getSingleShop(){
    var id = this.route.snapshot.params['id'];
    this.shopService
      .getShop(id)
      .subscribe(shop =>{
          this.shop = shop[0];
          })
  };

  goBack(){
    this.router.navigate(['/home']);
  }
}
