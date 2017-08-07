import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShopService {
  shopes=[];
  constructor(private _http:Http) { }
  checkMe:any;
  getShopes(){
    return this._http.get("http://localhost/api_json/select.php/")
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       
      });
  }
  
  getShop(id){
    return this._http.post("http://localhost/api_json/selectone.php/",{'id':id})
      .map(res=>res.json());
  }
  deleteShop(id){
    return this._http.post("http://localhost/api_json/delete.php/",{'id':id})
      .map(()=>this.getShopes());
  }
  updateShop(info){
    return this._http.post("http://localhost/api_json/update.php/", info)
      .map(()=>"");
  }
    
 addShop(info){
    return this._http.post("http://localhost/api_json/add.php",info)
      .map(()=>"");
  }

 search(info){
    return this._http.post("http://localhost/api_json/search.php",info)
      .map(()=>"");
  }

}
