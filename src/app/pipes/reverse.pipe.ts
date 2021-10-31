import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
                                                      // A pipe to reverse a name, not in use
  transform(value: string): any {
    return value.split('').reverse().join('');
  }

}
