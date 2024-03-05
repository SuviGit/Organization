import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, searchtxt?:any ): any {
    if(!value) return null;
    if(!searchtxt) return value;

    searchtxt = searchtxt.toLowerCase();

    return value.filter((item:any) => {
       return JSON.stringify(item).toLocaleLowerCase().includes(searchtxt);
    })
  }

}
