import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanDate'
})
export class CleanDatePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {

    var date = value.split('T');
    return date[0];
  }

}
