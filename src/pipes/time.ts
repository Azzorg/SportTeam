import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the Time pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'time',
})
export class Time implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number):string {
    let mn = Math.floor(value/60);
    let sec = Math.floor(value%60);

    let ret: string = ((mn < 10) ? '0':'') + mn + ':' + ((sec < 10)? '0':'') + sec;
    return ret;
  }
  
}
