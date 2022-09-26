import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter(function (search: { documentType: string | any[] }) {
      return search.documentType.indexOf(searchTerm) > -1;
    });
  }
}