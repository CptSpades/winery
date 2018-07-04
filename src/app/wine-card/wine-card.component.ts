import { Component, OnInit, Input } from '@angular/core';
import { Wine } from '../classes/wine';

@Component({
  selector: 'app-wine-card',
  templateUrl: './wine-card.component.html',
  styleUrls: ['./wine-card.component.scss']
})
export class WineCardComponent implements OnInit {

  @Input() wine: Wine;

  constructor() { }

  ngOnInit() {
  }

}
