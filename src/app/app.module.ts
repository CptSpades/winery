import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineNewComponent } from './wine-new/wine-new.component';
import { TableFilterPipe } from './table-filter.pipe';
import { WineCardComponent } from './wine-card/wine-card.component';
import { WineNavComponent } from './wine-nav/wine-nav.component';
import { WineCommentsFormComponent } from './wine-comments-form/wine-comments-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WineDetailComponent,
    WineListComponent,
    WineNewComponent,
    TableFilterPipe,
    WineCardComponent,
    WineNavComponent,
    WineCommentsFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
