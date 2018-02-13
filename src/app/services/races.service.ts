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

  getRaces() {
    let getRacesUrl = this.baseUrl + 'races';
    return this.http.get(getRacesUrl);
  }

  setRaces(races: any[]) {
    this.racesArr = races;
  }

}
