import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genero'
})
export class GeneroPipe implements PipeTransform {

  transform(value: unknown): string {

    if(value == 'm'){
      return 'Hombre'
    }else{
      return 'Mujer';
    }

    
  }

}
