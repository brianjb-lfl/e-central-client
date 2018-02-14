import { Component, OnInit } from '@angular/core';
import { RacesService } from '../../services/races.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
  currRace = {
    _id: 'n/a',
    type: '',
    city: '',
    state: '',
    district: '',
    candidates: []
  }
  currCandidate = {
    _id: 'n/a',
    name: ''
  }

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
    });
    console.log('edit race');
    console.log(e.target.parentElement.id);
    console.log(this.currRace);
  }

  onSubmit(form: NgForm) {
    let currRaceIdx = this.races.map( race => race._id ).indexOf(this.currRace._id);
    console.log(currRaceIdx);
    this.racesService.updateRace(this.currRace)
      .subscribe( () => {
        this.races[currRaceIdx] = Object.assign( {}, this.races[currRaceIdx], {
          ...this.currRace
        })
        console.log(this.currRace);
        console.log(this.races);
        this.resetCurrRace();
      })
  }

  onCancel() {
    this.resetCurrRace();
  }

  onCandidateEdit(e) {
    const candId = e.target.parentElement.parentElement.id;
    let currCandIdx = this.currRace.candidates
      .map( candidate => candidate._id )
      .indexOf(candId);
    this.currCandidate = Object.assign( {}, this.currCandidate, {
      _id: candId,
      name: this.currRace.candidates[currCandIdx].candidate.name
    })
    console.log(this.currCandidate);
  }

  onCandidateCancel() {
    this.resetCurrCandidate();
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

  resetCurrCandidate() {
    this.currCandidate = {
      _id: 'n/a',
      name: ''
    }
  }

}
