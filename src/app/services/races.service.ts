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
        (response: any[]) => {
          console.log('response');
          console.log(response);
          this.racesArr = response
          console.log('array');
          console.log(this.racesArr);
        },
        (error) => console.log(error)
      );
  }

}
