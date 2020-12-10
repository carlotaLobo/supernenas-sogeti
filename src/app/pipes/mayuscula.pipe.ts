import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayuscula'
})
export class MayusculaPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {



    return ' ' + value.toUpperCase();
  }

}
