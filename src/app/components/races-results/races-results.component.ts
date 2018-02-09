import { Component, OnInit } from '@angular/core';
import { RacesService } from '../../services/races.service';

@Component({
  selector: 'app-races-results',
  templateUrl: './races-results.component.html',
  styleUrls: ['./races-results.component.css'],
  providers: [ RacesService ],
})
export class RacesResultsComponent implements OnInit {

  races = [];

  constructor(private racesService:RacesService) { }

  ngOnInit() {
    this.racesService.getRaces();
    this.races = this.racesService.racesArr;
    console.log(this.races);
  }

}
