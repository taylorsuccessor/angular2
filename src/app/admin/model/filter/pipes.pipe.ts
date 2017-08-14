import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe ({name: 'filter'})

@Injectable()
export class FilterArrayPipe implements PipeTransform {
	transform (models:any , term:any):any {
	if(term == undefined)return models;
	return models.filter(function(model) {
	return model.name.toLowerCase().includes(term.toLowerCase());

	})
	}
	}


	
