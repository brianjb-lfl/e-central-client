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

  onAdd() {
    console.log('add race');
  }

  onEdit(e) {
    this.racesService.editingRace = this.racesService.racesArr
      .map( race => race._id )
      .indexOf( e.target.parentElement.id );
    this.router.navigate(['/race-edit']);
  }

  onDelete(e) {
    console.log('delete race ', e.target.parentElement.id);
  }

}
