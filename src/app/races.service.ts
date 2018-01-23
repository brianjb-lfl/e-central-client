import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class RacesService {

  private racesUrl = 'http://localhost:8080/api/races';


  constructor(
    private http: HttpClient,
  ) { }

  // GET races from API
  getRaces () {
    this.http.get(this.racesUrl)
      .subscribe( data => console.log(data));
  }

}
