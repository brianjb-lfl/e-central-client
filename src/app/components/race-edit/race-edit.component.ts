import { Component, OnInit } from '@angular/core';
import { RacesService } from '../../services/races.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-race-edit',
  templateUrl: './race-edit.component.html',
  styleUrls: ['./race-edit.component.css']
})
export class RaceEditComponent implements OnInit {

  constructor(
    private racesService:RacesService,
    private router: Router) { }

  currRace = {
    _id: 'n/a',
    type: '',
    city: '',
    state: '',
    district: '',
    candidates: []
  }

  ngOnInit() {
    this.setCurrRace();
  }

  onSubmit(form: NgForm) {
    this.racesService.updateRace(this.currRace)
      .subscribe( () => {
        this.races[currRaceIdx] = Object.assign( {}, this.races[currRaceIdx], {
          ...this.currRace
        })
      })
  }

  setCurrRace() {
    let tempObj = this.racesService.racesArr[this.racesService.editingRace];
    this.currRace = Object.assign( {}, this.currRace, 
      this.racesService.racesArr[this.racesService.editingRace] );
  }



}
