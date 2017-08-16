import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe ({name: 'filter'})


@Injectable()
export class FilterArrayPipe implements PipeTransform {
	 transform(models: Array, nameSearch: string, emailSearch: string, statusSearch: string, numSearch: any, typeSearch: string, genderSearch: string, dateSearch: any, idSearch: any){
        if (models && models.length){
            return models.filter(model =>{
                if (nameSearch && model.name.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1){
                    return false;
                }
                if (emailSearch && model.email.toLowerCase().indexOf(emailSearch.toLowerCase()) === -1){
                    return false;
                }
                if (statusSearch && model.area.toLowerCase().indexOf(statusSearch.toLowerCase()) === -1){
                    return false;
                }
                  if (numSearch && model.num.toLowerCase().indexOf(numSearch.toLowerCase()) === -1){
                    return false;
                }
                     if (typeSearch && model.car.toLowerCase().indexOf(typeSearch.toLowerCase()) === -1){
                    return false;
                }
                 if (genderSearch && model.r1.toLowerCase().indexOf(genderSearch.toLowerCase()) === -1){
                    return false;
                }
                   if (dateSearch && model.dates.toLowerCase().indexOf(dateSearch.toLowerCase()) === -1){
                    return false;
                }
                    if (idSearch && model.shop_id.toLowerCase().indexOf(idSearch.toLowerCase()) === -1){
                    return false;
                }
                return true;
           })
        }
        else{
            return models;
        }
    }
}
