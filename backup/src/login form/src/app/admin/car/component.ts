
import * as Car from './indexes';
import { SecureComponent } from '../../../app/admin/secure';
import { Service } from '../car/service/service';
import { FilterArrayPipe } from '../car/index/pipes.pipe';
import { PagerService } from '../car/index/pager.service';
import { MneuComponent } from '../secure/mneu.component';

export class ArrayModel {

getArrModel() {
return [Car.Create, Car.Index, Car.Edit, Car.Show, FilterArrayPipe,  SecureComponent, Car.Example, MneuComponent];
}

getArrMService() {
return [Service, PagerService]
}
}


