import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/forkJoin';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class RacesService {

  constructor(
    private authService: AuthService,
    private http: HttpClient) { }

  // *** Local variables

  jwtHeaders = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Accept', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('jwt_token'));

  baseUrl = 'http://localhost:8080/api/';

  racesArr: any[] = [];
  editingRace: number = null;

  // *** Race admin functions

  getRaces() {
    const getRacesUrl = this.baseUrl + 'races';
    return this.http.get(getRacesUrl);
  }

  setRaces(races: any[]) {
    this.racesArr = races;
  }

  saveRace(raceObj) {
    this.jwtHeaders
      .append('Authorization', 'Bearer ' + localStorage.getItem('jwt_token'));
    
    if(this.editingRace) {
      const putRaceUrl = this.baseUrl + `races/${raceObj._id}`;
      return this.http.put(putRaceUrl, raceObj, { headers: this.jwtHeaders });
    }
    else {
      const postRaceUrl = this.baseUrl + 'races';
      return this.http.post(postRaceUrl, raceObj, { headers: this.jwtHeaders });
    }

  }

  deleteRace(raceId) {
    this.jwtHeaders
      .append('Authorization', 'Bearer ' + localStorage.getItem('jwt_token'));

    const delRaceUrl = this.baseUrl + `races/${raceId}`;
    return this.http.delete(delRaceUrl, { headers: this.jwtHeaders });
  }

  castVotes(votesObj) {

    const racesList = Object.keys(votesObj);
    let voteUrl = '';
    let votePayload = {};
    let observableBatch = [];

    racesList.forEach( race => {
      if(votesObj[race] !== 'abstain') {

        voteUrl = this.baseUrl + `races/ballot/${race}`;
        votePayload = Object.assign( {}, votePayload, {
          ['_id']: race,
          ['candidates._id']: votesObj[race], 
        })

        observableBatch.push(
          this.http.put(voteUrl, votePayload, { headers: this.jwtHeaders })          
        )
      }
    });

    const currUsername = this.authService.currUser.username;
    const hasVotedUrl = this.baseUrl + `users/setvote/${currUsername}`;
    const hasVotedPayload = {
      username: currUsername
    }
    observableBatch.push(
      this.http.put(hasVotedUrl, hasVotedPayload)
    )

    return Observable.forkJoin(observableBatch);
  }

}
