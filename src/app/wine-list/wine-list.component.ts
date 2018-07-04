import { Component, OnInit } from '@angular/core';
import { WineApiService } from '../wine-api.service';
import { Wine } from '../classes/wine';
import { WineCardComponent } from '../wine-card/wine-card.component';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})
export class WineListComponent implements OnInit {

  public wines: Wine[];

  searchText = '';

  constructor(private _wineService: WineApiService) { }

  ngOnInit() {
    this.getWine();
  }

  sortBy(column) {
    if (this.wines) {
      this.wines.sort((win1, win2) => win1[column] !== win2[column] ? win1[column] < win2[column] ? -1 : 1 : 0);
    }
  }

  getWine() {
    this._wineService.getWines().subscribe(
      res => this.wines = res,
      err => console.error(err),
      () => console.log('wine loaded')
    );
  }
}
