import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getPow',
})
export class GetPowPipe implements PipeTransform {
  transform(value: number, pow: number = 1): number {
    return Math.pow(value, pow);
  }
}
