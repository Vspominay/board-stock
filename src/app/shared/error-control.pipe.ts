import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorControl'
})
export class ErrorControlPipe implements PipeTransform {

  transform(value: { [key: string]: any }): string {
    if (!value) return '';
    return `errors.${Object.keys(value)[0]}`;
  }
}
