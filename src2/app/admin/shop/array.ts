
import { AddShopComponent } from 'app/admin/shop/add';
import { EditShopComponent } from 'app/admin/shop/edit';
import { ShowShopComponent } from 'app/admin/shop/show';
import { HomeShopComponent } from 'app/admin/shop/home';
import { SecureComponent } from 'app/admin/secure';
import { ShopService } from 'app/admin/shop/service/shop.service';



//var name=[AddShopComponent];
//alert(name);



//function arr(){
//	 name=[AddShopComponent];
//	 return name;}




export class Array{
	
	getarr(){
	return [AddShopComponent,EditShopComponent,ShowShopComponent,HomeShopComponent,SecureComponent];
	}

	getArrService(){
	return [ShopService]
	}
}


