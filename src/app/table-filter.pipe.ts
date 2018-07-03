import { Pipe, PipeTransform } from '@angular/core';
import { Wine } from './classes/wine';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(wines: Wine[], searchText: string): any {
    if (!searchText) {
      return wines;
    }
    return wines.filter((wine: Wine) => this.applyFilter(wine, searchText));
  }
  applyFilter(wine: Wine, searchText: string): boolean {
    for (const key in wine) {
      if (String(wine[key]).toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
        return true;
      }
  }
  return false;
  }
}
