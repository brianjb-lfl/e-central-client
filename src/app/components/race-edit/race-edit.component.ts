import { Component, OnInit, OnDestroy } from '@angular/core';
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
    private racesService: RacesService,
    private router: Router) { }

  // *** Local variables

  currRace = {
    _id: 'n/a',
    type: '',
    city: '',
    state: '',
    district: '',
    candidates: []
  }

  addingCandidate = false;
  newCandidateName = '';

  // *** Life-cycle

  ngOnInit() {
    this.setCurrRace();
  }

  ngOnDestroy() {
    this.racesService.editingRace = null;
  }

  // *** Race editing

  onSubmit(form: NgForm) {
    this.racesService.saveRace(this.currRace)
      .subscribe( () => {
        this.router.navigate(['/races-admin']);
      })
  }

  onCancelEdit() {
    this.router.navigate(['/races-admin']);
  }

  onAddCandidate() {
    this.addingCandidate = true;
  }

  onDelCandidate(e) {
    let tempCandidates = this.currRace.candidates;
    this.currRace.candidates = tempCandidates.filter( candidate =>
      candidate.candidate.name !== e.target.parentElement.getElementsByTagName("SPAN")[0].textContent
    )
  }

  // *** New candidate editing

  addNewCandidate() {
    this.currRace.candidates = 
      [...this.currRace.candidates, {candidate: {name: this.newCandidateName}}];
    this.clearAddingCandidate();
  }

  cancelNewCandidate() {
    this.clearAddingCandidate();
  }

  // *** Utils

  setCurrRace() {
    //let tempObj = this.racesService.racesArr[this.racesService.editingRace];
    if(this.racesService.editingRace >= 0) {
      this.currRace = Object.assign( {}, this.currRace, 
        this.racesService.racesArr[this.racesService.editingRace] );
    }
  }

  clearAddingCandidate() {
    this.addingCandidate = false;
    this.newCandidateName = '';
  }

}
