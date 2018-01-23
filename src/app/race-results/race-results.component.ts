import { Component, OnInit } from '@angular/core';
import { RacesService } from '../races.service';

@Component({
  selector: 'app-race-results',
  templateUrl: './race-results.component.html',
  styleUrls: ['./race-results.component.css']
})
export class RaceResultsComponent implements OnInit {

  constructor(
    private racesService: RacesService
  ) { }

  ngOnInit() {
    this.getRaces();
  }

  getRaces() {
    this.racesService.getRaces();
  }

}
