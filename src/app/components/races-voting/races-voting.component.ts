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

  ngOnInit() {
    if(this.authService.currUser.adminUser 
      || this.authService.currUser.username === 'no session'
      || this.authService.currUser.hasVoted) {
      this.router.navigate(['/']);
    }

    this.getRaces();
  }

  getRaces() {
    this.racesService.getRaces()
      .subscribe(
        (races: any[]) => {
          this.racesService.setRaces(races);
          this.races = this.racesService.racesArr
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
