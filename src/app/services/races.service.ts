import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class RacesService {

  baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  racesArr: any[] = [];
  editingRace: number = null;

  getRaces() {
    const getRacesUrl = this.baseUrl + 'races';
    return this.http.get(getRacesUrl);
  }

  setRaces(races: any[]) {
    this.racesArr = races;
  }

  saveRace(raceObj) {
    let jwtHeaders = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Accept', 'application/json')
      .append('Authorization', 'Bearer ' + localStorage.getItem('jwt_token'));
    
    if(this.editingRace) {
      const putRaceUrl = this.baseUrl + `races/${raceObj._id}`;
      return this.http.put(putRaceUrl, raceObj, { headers: jwtHeaders });
    }
    else {
      const postRaceUrl = this.baseUrl + 'races';
      return this.http.post(postRaceUrl, raceObj, { headers: jwtHeaders });
    }

  }

  deleteRace(raceId) {
    let jwtHeaders = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Accept', 'application/json')
      .append('Authorization', 'Bearer ' + localStorage.getItem('jwt_token'));

    const delRaceUrl = this.baseUrl + `races/${raceId}`;
    return this.http.delete(delRaceUrl, { headers: jwtHeaders });
  }

}
