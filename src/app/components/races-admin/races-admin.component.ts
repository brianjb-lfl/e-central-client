import { Component, OnInit } from '@angular/core';
import { RacesService } from '../../services/races.service';
import { AuthService } from '../../services/auth.service';
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
    private authService:AuthService,
    private router: Router) { }

  // *** Local variables

  races = [];

  // *** Life-cycle

  ngOnInit() {
    if(!this.authService.currUser.adminUser) {
      this.router.navigate(['/']);
    }

    this.getRaces();
  }

  // *** Race admin functions

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
    this.racesService.editingRace = null;
    this.router.navigate(['/race-edit']);
  }

  onEdit(e) {
    console.log(e.target.parentElement.id);
    this.racesService.editingRace = this.racesService.racesArr
      .map( race => race._id )
      .indexOf( e.target.parentElement.id );
    console.log(this.racesService.editingRace);
    this.router.navigate(['/race-edit']);
  }

  onDelete(e) {
    const delRaceId = e.target.parentElement.id;
    this.racesService.deleteRace(delRaceId)
      .subscribe( 
        () => {
          let tempRaces = this.races;
          this.races = tempRaces.filter( race =>
            race._id !== delRaceId);
          this.racesService.setRaces(this.races);
        },
        (err) => console.log(err)
      );
  }

}
