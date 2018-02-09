import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RacesAdminComponent } from './components/races-admin/races-admin.component';
import { RacesResultsComponent } from './components/races-results/races-results.component';
import { RacesVotingComponent } from './components/races-voting/races-voting.component';
import { UsersRegisterComponent } from './components/users-register/users-register.component';
import { UsersLoginComponent } from './components/users-login/users-login.component';

import { RacesService } from './services/races.service';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  { path: '', component: RacesResultsComponent },
  { path: 'results', component: RacesResultsComponent},
  { path: 'login', component: UsersLoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RacesAdminComponent,
    RacesResultsComponent,
    RacesVotingComponent,
    UsersRegisterComponent,
    UsersLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
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
