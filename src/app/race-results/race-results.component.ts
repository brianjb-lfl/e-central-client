import { Component, OnInit } from '@angular/core';
import { RacesService } from '../races.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-race-results',
  templateUrl: './race-results.component.html',
  styleUrls: ['./race-results.component.css']
})
export class RaceResultsComponent implements OnInit {

  races = [];

  constructor(
    private racesService: RacesService
  ) { }

  ngOnInit() {
    this.getRaces();
  }

  getRaces() {
    this.racesService.getRaces()
      .subscribe(
        races => {
          this.races = races;
        },
        error => console.log(error)
      )
  }

}

