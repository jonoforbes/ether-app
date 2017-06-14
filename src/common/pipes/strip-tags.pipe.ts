import { Pipe, PipeTransform } from "@angular/core"

@Pipe({name: 'stripTags'})
export class StripTagsPipe implements PipeTransform {
  
  transform(input: string): any {
    
    if (!isString(input) || isUndefined(input))
    return input;
    
    return input.replace(/<\S[^><]*>/g, '');
  }
}

function isUndefined (value: any): value is undefined {
  
  return typeof value === 'undefined';
}

function isString (value: any): value is string {
  
  return typeof value === 'string';
}