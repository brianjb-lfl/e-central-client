import { Component, OnInit } from '@angular/core';
import { RacesService } from '../../services/races.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-races-admin',
  templateUrl: './races-admin.component.html',
  styleUrls: ['./races-admin.component.css']
})
export class RacesAdminComponent implements OnInit {

  constructor(
    private racesService:RacesService,
    private router: Router) { }

  races = [];
  currRace = {};

  ngOnInit() {
    this.resetCurrRace();
    this.getRaces();
  }

  getRaces() {
    this.racesService.getRaces()
      .subscribe(
        (races: any[]) => {
          this.races = races;
          console.log(races);
        },
        (err) => console.log(err)
      );
  }

  delRace(e) {
    console.log('delete race');
    console.log(e.target.parentElement.id);
  }

  editRace(e) {
    const selRaceData = this.races.filter( race => race._id === e.target.parentElement.id )[0];
    this.currRace = Object.assign( {}, this.currRace, {
      ...selRaceData
    })
    console.log('edit race');
    console.log(e.target.parentElement.id);
    console.log(this.currRace);
  }

  onCancel() {
    this.resetCurrRace();
  }

  resetCurrRace() {
    this.currRace = {
      _id: 'n/a',
      type: '',
      city: '',
      state: '',
      district: '',
      candidates: []
    }
  }

}
