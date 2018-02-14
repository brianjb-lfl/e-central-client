import { Component, OnInit } from '@angular/core';
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
          this.races = this.racesService.racesArr; 
        },
        (err) => console.log(err)
      );
  }

  onGoVoteClick() {
    this.router.navigate(['/login']);
  }

  onGoRegisterClick() {
    this.router.navigate(['/register']);
  }


}
