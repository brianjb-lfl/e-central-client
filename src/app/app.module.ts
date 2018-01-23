import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { RaceResultsComponent } from './race-results/race-results.component';
import { RacesService } from './races.service';


@NgModule({
  declarations: [
    AppComponent,
    RaceResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [RacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
