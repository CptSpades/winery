import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WineApiService } from './../wine-api.service';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.scss']
})
export class WineDetailComponent implements OnInit {

  public wine;

  constructor(
    private _route: ActivatedRoute,
    private _wineService: WineApiService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._wineService.getWine(params['id']).subscribe(res => {
        this.wine = res;
      });
    });
  }

}
