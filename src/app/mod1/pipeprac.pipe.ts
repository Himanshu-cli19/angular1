import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeprac'
})
export class PipepracPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  

  // transform(value: number): string {
  //   switch (value) {
  //     case 0: return 'Dismiss';
  //     case 1: return 'Pending';
  //     case 2: return 'Disposed with Direction';
  //     default: return 'Unknown';
  //   }
  // }

  transform(value:string):  number {
    switch(value){
      case 'hello': return 0
      // case 1: return "hi"
      // case 3: return "h"
       default: return 1;
    }
  }
}
