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

  ngOnInit() {
    this.getRaces();
  }

  getRaces() {
    this.racesService.getRaces()
      .subscribe(
        (races: any[]) => {
          this.racesService.setRaces(races);
          this.races = this.racesService.racesArr
          console.log(this.races);
        },
        (err) => console.log(err)
      );
  }

  onRadioChange(e) {
    console.log(e);
  }

}
