import { Component, OnInit } from '@angular/core';
import { RacesService } from '../../services/races.service';

@Component({
  selector: 'app-races-results',
  templateUrl: './races-results.component.html',
  styleUrls: ['./races-results.component.css'],
  providers: [ ],
})
export class RacesResultsComponent implements OnInit {

  constructor(private racesService:RacesService) { }

  races = [];

  ngOnInit() {
    this.getRaces();
  }

  getRaces() {
    this.racesService.getRaces()
      .subscribe(
        (races: any[]) => {
          this.races = races;
        },
        (err) => console.log(err)
      );
  }

}
