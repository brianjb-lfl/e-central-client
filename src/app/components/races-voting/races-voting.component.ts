import { Component, OnInit } from '@angular/core';
import { RacesService } from '../../services/races.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-races-voting',
  templateUrl: './races-voting.component.html',
  styleUrls: ['./races-voting.component.css']
})
export class RacesVotingComponent implements OnInit {

  constructor(  
    private racesService:RacesService,
    private authService:AuthService,
    private router: Router) { }

  races = [];

  votes = {};

  currUser = {
    username: 'no session',
    city: '',
    state: '',
    district: '',
    adminUser: false,
    hasVoted: true,
  };

  ngOnInit() {
    if(this.authService.currUser.adminUser 
      || this.authService.currUser.username === 'no session'
      || this.authService.currUser.hasVoted) {
      this.router.navigate(['/']);
    }

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
          this.races = [...this.racesService.racesArr].sort( (a, b) => {
            if(a.racelevel < b.racelevel) return -1;
            if(a.racelevel > b.racelevel) return 1;
            if(a.racesort < b.racesort) return -1;
            if(a.racesort > b.racesort) return 1;
            return -1;
          })
          this.races.forEach( race => this.votes[race._id] = null);
        },
        (err) => console.log(err)
      );
  }

  onVote() {
    this.racesService.castVotes(this.votes)
      .subscribe(
        () => { 
          this.votes = {};
          this.router.navigate(['/']);
        },
        (err) => console.log(err)
      );
  }

  onCancelVote() {
    this.votes = {};
    this.router.navigate(['/results']);
  }

}
