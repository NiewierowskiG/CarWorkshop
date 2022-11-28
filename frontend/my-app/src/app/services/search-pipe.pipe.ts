import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  public transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;
    args = args.toLowerCase();
    debugger;
    return value.filter(function(item: string) {
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }
}
