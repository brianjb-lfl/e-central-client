import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RaceResultsComponent } from './race-results/race-results.component';
import { RacesService } from './races.service';
import { RegLoginComponent } from './reg-login/reg-login.component';


const appRoutes: Routes = [
  { path: '', component: RaceResultsComponent },
  { path: 'results', component: RaceResultsComponent},
  { path: 'login', component: RegLoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RaceResultsComponent,
    RegLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [RacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
