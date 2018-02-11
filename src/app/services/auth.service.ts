import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  userLogin(username, password) {
    const loginUrl = this.baseUrl + 'auth/login';
    const b64Encoded = btoa(`${username}:${password}`);
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + b64Encoded,
    });

    return this.http.post(loginUrl, {}, { headers })
  }

}
