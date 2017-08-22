import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Service {
  models= [];
  constructor(private _http: Http) { }
  checkMe: any;
  getAllList(){
    return this._http.get("http://localhost/api_json/select.php/")
      .map(res=> {
        this.checkMe = res;

        if (this.checkMe._body !== "0") {
           return res.json();
        }

      });
  }

  show(id) {
    return this._http.post("http://localhost/api_json/selectone.php/", {'id': id})
      .map(res => res.json());
  }
  delete(id) {
    return this._http.post("http://localhost/api_json/delete.php/", {'id': id})
      .map(() => this.getAllList());
  }
  edit(info) {
    return this._http.post("http://localhost/api_json/update.php/", info)
      .map(() => "");
  }

 create(info) {
    return this._http.post("http://localhost/api_json/add.php", info)
      .map(() => "");
  }

 getByFilter(info) {
    return this._http.post("http://localhost/api_json/search.php",info)
      .map(()=>"");
  
  }
}
