import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { RaceResultsComponent } from './race-results/race-results.component';
import { RacesService } from './races.service';


const appRoutes: Routes = [
  { path: '', component: RaceResultsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RaceResultsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
  ],
  providers: [RacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
