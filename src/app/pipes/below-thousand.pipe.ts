import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'belowThousand',
  pure: true
})
export class BelowThousandPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      const num = +value;
      if(num >= 1000){
        return "999+";
      }
    }
    return value;
  }
}
