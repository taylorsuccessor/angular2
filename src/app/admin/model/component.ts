
import { CreateComponent } from '../model/create';
import { EditComponent } from '../model/edit';
import { ShowComponent } from '../model/show';
import { IndexComponent } from '../model/index';
import { SecureComponent } from 'app/admin/secure';
import { Service } from '../model/service/service';
import { FilterArrayPipe } from '../model/index/pipes.pipe';

export class ArrayModel{
	
	getArrModel(){
	return [CreateComponent,IndexComponent,EditComponent,ShowComponent,FilterArrayPipe,SecureComponent];
	}

	getArrMService(){
	return [Service]
	}
}


