
import { CreateComponent } from '../model/indexes';
import { EditComponent } from '../model/indexes';
import { ShowComponent } from '../model/indexes';
import { IndexComponent } from '../model/indexes';
import { SecureComponent } from 'app/admin/secure';
import { Service } from '../model/service/service';
import { FilterArrayPipe } from '../model/index/pipes.pipe';
import { PagerService } from '../model/index/pager.service';
export class ArrayModel{
	
	getArrModel(){
	return [CreateComponent,IndexComponent,EditComponent,ShowComponent,FilterArrayPipe,SecureComponent];
	}

	getArrMService(){
	return [Service,PagerService]
	}
}


