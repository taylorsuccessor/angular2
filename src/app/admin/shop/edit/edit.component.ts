import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ShopService } from '../../shop/service/shop.service';
import { Shop } from '../../shop/service/shop';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditShopComponent implements OnInit {

   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shopService: ShopService
  ) { }

  ngOnInit() {
      this.getSingleShop();
  }

  //model:any={};
  model = new Shop();
  id = this.route.snapshot.params['id'];
  getSingleShop(){
    
    this.shopService
      .getShop(this.id)
      .subscribe(shop =>{
          this.model = shop[0];
          })
  };
  
  updateShop(){
      this.shopService
        .updateShop(this.model)
        .subscribe(()=> this.goBack());
  }
 
   goBack(){
    this.router.navigate(['/home']);
  }
}
