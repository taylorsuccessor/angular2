
import { CreateComponent } from '../model/create';
import { EditComponent } from '../model/edit';
import { ShowComponent } from '../model/show';
import { IndexComponent } from '../model/index';
//import { SecureComponent } from 'app/admin/secure';
import { Service } from '../model/service/service';

export class ArrayModel{
	
	getArrModel(){
	return [CreateComponent,IndexComponent,EditComponent,ShowComponent];
	}

	getArrMService(){
	return [Service]
	}
}


