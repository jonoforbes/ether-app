import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encodeURI'
})
export class EncodeURIPipe implements PipeTransform {
  
  transform (input: any) {
    
    if (!isString(input)) {
      return input;
    }
    
    return encodeURI(input);
  }
}

function isString (value: any): value is string {
  
  return typeof value === 'string';
}