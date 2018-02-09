import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RacesService {

  baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  racesArr = [];

  getRaces() {
    let getRacesUrl = this.baseUrl + 'races';
    return this.http.get(getRacesUrl)
      .subscribe(
        (response: any[]) => this.racesArr = response,
        (error) => console.log(error)
      );
  }

}
