
import { AddCarComponent } from 'app/admin/car/add';
import { EditCarComponent } from 'app/admin/car/edit';
import { ShowCarComponent } from 'app/admin/car/show';
import { HomeCarComponent } from 'app/admin/car/home';
//import { SecureComponent } from 'app/admin/secure';
import { CarService } from 'app/admin/car/service/car.service';

export class ArrayC{
	
	getArrCar(){
	return [AddCarComponent,HomeCarComponent,EditCarComponent,ShowCarComponent];
	}

	getArrCService(){
	return [CarService]
	}
}


