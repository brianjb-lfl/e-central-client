import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RacesService {

  racesUrl = 'http://localhost:8080/api/races';
  races = [];

  constructor( private http: Http ) { }

  // GET races from API
  getRaces () {
    return this.http.get(this.racesUrl)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw('Server error');
        }
      )
  }

}
