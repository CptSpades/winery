import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineNewComponent } from './wine-new/wine-new.component';

@NgModule({
  declarations: [
    AppComponent,
    WineDetailComponent,
    WineListComponent,
    WineNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
