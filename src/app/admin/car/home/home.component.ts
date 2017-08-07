import { Component, OnInit } from '@angular/core';
import { CarService } from '../../car/service/car.service';
import { Car } from '../../car/service/car';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-homeCar',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeCarComponent implements OnInit {

  constructor(
    private _carService:CarService,
    private router: Router
   ) { }
  cars:any;
  ngOnInit() {
    this.getCars();
  }
  getCars(){
     this._carService
        .getCars()
        .subscribe(cars => {
          this.cars = cars;
      } )
  }
  deleteCar(id){
      this._carService
        .deleteCar(id)
        .subscribe(() => {
        this.getCars();
      } )
  }

 

}


 
