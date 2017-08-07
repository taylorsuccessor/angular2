import { Component, OnInit } from '@angular/core';
import { CarService } from '../../car/service/car.service';
import { Car } from '../../car/service/car';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-addCar',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(
    private carService: CarService,
     private router: Router) { }

  ngOnInit() {
  }

model = new Car();
  addCar(){
      this.carService
        .addCar(this.model)
        .subscribe(()=>  this.router.navigate(['/homec']));
  }
   goBack(){
    this.router.navigate(['/homec']);
  }
}