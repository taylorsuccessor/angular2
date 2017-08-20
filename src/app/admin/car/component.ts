
import * as Car from './indexes';
import { SecureComponent } from 'app/admin/secure';
import { Service } from '../car/service/service';
import { FilterArrayPipe } from '../car/index/pipes.pipe';
import { PagerService } from '../car/index/pager.service';
export class ArrayModel{
	
	getArrModel(){
	return [Car.Create,Car.Index,Car.Edit,Car.Show,FilterArrayPipe,SecureComponent];
	}

	getArrMService(){
	return [Service,PagerService]
	}
}


