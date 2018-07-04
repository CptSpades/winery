import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wine-nav',
  templateUrl: './wine-nav.component.html',
  styleUrls: ['./wine-nav.component.scss']
})
export class WineNavComponent implements OnInit {


  searchText = '';

  constructor() { }

  ngOnInit() {
  }

}
