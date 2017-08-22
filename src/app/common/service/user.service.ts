import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  useres= [];
  constructor(private _http: Http) { }
  checkMe :any;


 addUser(info){
    return this._http.post( "http://localhost/api_json/add_user.php", info)
      .map(() => "");
  }

  loginUser(info) {
   return this._http.get("http://localhost/api_json/login_user.php", info)
   .map(() => "");
  }

  SendEmail(info) {
   return this._http.get("http://localhost/api_json/login_user.php", info)
   .map(() => "");
  }

error(mess) {
  console.log(mess);
}

success(mes: string) {
    window.alert(mes);
}

}
