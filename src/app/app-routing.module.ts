import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineNewComponent } from './wine-new/wine-new.component';

const routes: Routes = [
  { path: '', redirectTo: '/wine', pathMatch: 'full' },
  { path: 'wine', component: WineListComponent },
  { path: 'wine/:id', component: WineDetailComponent },
  { path: 'newWine', component: WineNewComponent }
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
