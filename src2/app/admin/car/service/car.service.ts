import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CarService {
  shopes=[];
  constructor(private _http:Http) { }
  checkMe:any;
  getCars(){
    return this._http.get("http://localhost/api_json/select.php/")
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       
      });
  }
  
  getCar(id){
    return this._http.post("http://localhost/api_json/selectone.php/",{'id':id})
      .map(res=>res.json());
  }
  deleteCar(id){
    return this._http.post("http://localhost/api_json/delete.php/",{'id':id})
      .map(()=>this.getCars());
  }
  updateCar(info){
    return this._http.post("http://localhost/api_json/update.php/", info)
      .map(()=>"");
  }
    
 addCar(info){
    return this._http.post("http://localhost/api_json/add.php",info)
      .map(()=>"");
  }

 search(info){
    return this._http.post("http://localhost/api_json/search.php",info)
      .map(()=>"");
  }

}
