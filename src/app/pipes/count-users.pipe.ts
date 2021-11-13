import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countUsers'
})
export class CountUsersPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {

    var count: number = 0;

    for (let i of value) {
      count++
    }

    return count;
  }

}
