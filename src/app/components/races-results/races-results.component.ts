import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { RacesService } from '../../services/races.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-races-results',
  templateUrl: './races-results.component.html',
  styleUrls: ['./races-results.component.css'],
  providers: [ ],
})
export class RacesResultsComponent implements OnInit {

  constructor(
    private racesService:RacesService,
    private authService:AuthService,
    private router: Router) { }

  currUser = {
    username: 'no session',
    city: '',
    state: '',
    district: '',
    adminUser: false,
    hasVoted: true,
  };

  races = [];
  raceTotals = {};
  raceDisplayMode = 'all';

  ngOnInit() {
    this.getUser();
    this.getRaces();
  }

  getUser() {
    this.currUser = this.authService.currUser;
  }

  getRaces() {
    this.racesService.getRaces()
      .subscribe(
        (races: any[]) => {
          this.racesService.setRaces(races);
          this.races = this.racesService.racesArr;
          this.raceTotals = this.racesService.racesTotals;
        },
        (err) => console.log(err)
      );
  }

  onMyRacesClick() {
    if(this.raceDisplayMode === 'all') {
      this.raceDisplayMode = 'user';
    }
  }

  onAllRacesClick() {
    if(this.raceDisplayMode === 'user') {
      this.raceDisplayMode = 'all';
    }
  }

  onGoVoteClick() {
    if(!this.currUser.hasVoted) {
      this.router.navigate(['/vote']);
    }
  }

  onGoLoginClick() {
    this.router.navigate(['/login']);
  }

  onGoRegisterClick() {
    this.router.navigate(['/register']);
  }


}
