import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { WineApiService } from './../wine-api.service';
import { Wine } from '../classes/wine';

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.scss']
})
export class WineNewComponent implements OnInit {

  wineForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    vineyard: new FormControl(),
    year: new FormControl()
  });
  constructor(private _wineService: WineApiService) { }

  submitWine() {
    const model = this.wineForm.value;

    const wine = new Wine(
      model.name,
      model.vineyard,
      model.year,
      model.description
    );

    this._wineService.postWine(wine);
  }


  ngOnInit() {
  }

}
