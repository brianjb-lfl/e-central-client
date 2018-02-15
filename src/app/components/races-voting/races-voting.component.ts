import { Component, OnInit } from '@angular/core';
import { RacesService } from '../../services/races.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-races-voting',
  templateUrl: './races-voting.component.html',
  styleUrls: ['./races-voting.component.css']
})
export class RacesVotingComponent implements OnInit {

  constructor(  
    private racesService:RacesService,
    private router: Router) { }

  races = [];

  votes = {};

  ngOnInit() {
    this.getRaces();
  }

  getRaces() {
    this.racesService.getRaces()
      .subscribe(
        (races: any[]) => {
          this.racesService.setRaces(races);
          this.races = this.racesService.racesArr
          this.races.forEach( race => this.votes[race._id] = null);
          console.log(this.races);
          console.log(this.votes);
        },
        (err) => console.log(err)
      );
  }

  onRadioChange(e) {
    // console.log('radio change');
    // console.log(this.races);
    // console.log(this.votes);
  }

  onVote() {
    console.log('onVote called');
    this.racesService.castVotes(this.votes)
      .subscribe(
        () => { console.log('votes cast') },
        (err) => console.log(err)
      );
  }

}
