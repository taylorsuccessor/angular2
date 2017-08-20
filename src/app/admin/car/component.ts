
import { Create } from '../car/indexes';
import { Edit } from '../car/indexes';
import { Show } from '../car/indexes';
import { Index } from '../car/indexes';
import { SecureComponent } from '../../../app/admin/secure';
import { Service } from '../car/service/service';
import { FilterArrayPipe } from '../car/index/pipes.pipe';
import { PagerService } from '../car/index/pager.service';
export class ArrayModel{
	
	getArrModel(){
	return [Create,Index,Edit,Show,FilterArrayPipe,SecureComponent];
	}

	getArrMService(){
	return [Service,PagerService]
	}
}


