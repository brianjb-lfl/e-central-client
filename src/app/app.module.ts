import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RacesAdminComponent } from './components/races-admin/races-admin.component';
import { RaceEditComponent } from './components/race-edit/race-edit.component';
import { RacesResultsComponent } from './components/races-results/races-results.component';
import { RacesVotingComponent } from './components/races-voting/races-voting.component';
import { UsersRegisterComponent } from './components/users-register/users-register.component';
import { UsersLoginComponent } from './components/users-login/users-login.component';
import { HeaderComponent } from './components/header/header.component';

import { RacesService } from './services/races.service';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  { path: '', component: RacesResultsComponent },
  { path: 'results', component: RacesResultsComponent },
  { path: 'login', component: UsersLoginComponent },
  { path: 'register', component: UsersRegisterComponent },
  { path: 'vote', component: RacesVotingComponent },
  { path: 'races-admin', component: RacesAdminComponent },
  { path: 'race-edit', component: RaceEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RacesAdminComponent,
    RaceEditComponent,
    RacesResultsComponent,
    RacesVotingComponent,
    UsersRegisterComponent,
    UsersLoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    RacesService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
