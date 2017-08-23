import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
 // styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
term$ = new Subject<string>();
  constructor(

  ) { }

  ngOnInit() {
  }
  getByFilter(term: string) {

 alert( "su" );
  }

}
