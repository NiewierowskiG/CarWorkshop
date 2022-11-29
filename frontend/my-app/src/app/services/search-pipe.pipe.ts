import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  public transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;
    args = args.toLowerCase();

    return value.filter(function(item: string) {
      let arg_list = args.split(/\s+/);
      console.log(arg_list)
      console.log(arg_list.every((v:string) => JSON.stringify(item).toLowerCase().includes(v)))
      return arg_list.every((v:string) => JSON.stringify(item).toLowerCase().includes(v))
    });
  }
}
