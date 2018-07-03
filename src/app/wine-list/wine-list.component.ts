import { Component, OnInit } from '@angular/core';
import { WineApiService } from '../wine-api.service';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})
export class WineListComponent implements OnInit {

  public wines;

  searchText = '';

  constructor(private _wineService: WineApiService) { }

  ngOnInit() {
    this.getWine();
  }

  onSelect(wine) {
    console.log(wine);
  }

  getWine() {
    this._wineService.getWines().subscribe(
      res => this.wines = res,
      err => console.error(err),
      () => console.log('wine loaded')
    );
  }
}
