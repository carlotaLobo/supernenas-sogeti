import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vehicleModel',
})
export class VehicleModelPipe implements PipeTransform {
  transform(value: Object): unknown {

    var v = JSON.stringify(value);
    var init = v.indexOf('{');
    var end = v.indexOf(':');
    var last = v.lastIndexOf('}');

    value = JSON.parse(
      v.replace(v.substring(init, end + 1), '').replace(v.charAt(last), '')
    );

    return value['model'];
  }
}
