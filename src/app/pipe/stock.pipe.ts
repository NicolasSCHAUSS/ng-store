import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock',
  standalone: true
})
export class StockPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "Stock : "+ value;
  }

}
