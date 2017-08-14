import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { CarService } from '../../car/service/car.service';
import { Car } from '../../car/service/car';
@Component({
  selector: 'app-showCar',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowCarComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private carService: CarService
  ) { }

  ngOnInit() {
    this.getSingleCar();
  }
  car:Car;
  getSingleCar(){
    var id = this.route.snapshot.params['id'];
    this.carService
      .getCar(id)
      .subscribe(car =>{
          this.car = car[0];
          })
  };

  goBack(){
    this.router.navigate(['/homec']);
  }
}
