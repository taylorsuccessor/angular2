
import { Create } from '../model/indexes';
import { Edit } from '../model/indexes';
import { Show } from '../model/indexes';
import { Index } from '../model/indexes';
import { SecureComponent } from '../../../app/admin/secure';
import { Service } from '../model/service/service';
import { FilterArrayPipe } from '../model/index/pipes.pipe';
import { PagerService } from '../model/index/pager.service';
export class ArrayModel{
	
	getArrModel(){
	return [Create,Index,Edit,Show,FilterArrayPipe,SecureComponent];
	}

	getArrMService(){
	return [Service,PagerService]
	}
}


