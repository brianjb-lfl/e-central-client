import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  baseUrl = 'http://localhost:8080/api/';

  currUser = {
    username: 'no session',
    city: '',
    state: '',
    district: '',
    admin: false,
    hasVoted: true,
    expires: new Date()
  };

  constructor(private http: HttpClient) { }

  userLogin(username, password) {
    const loginUrl = this.baseUrl + 'auth/login';
    const b64Encoded = btoa(`${username}:${password}`);
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + b64Encoded,
    });

    return this.http.post(loginUrl, {}, { headers })

  }

  userLogout() {
    localStorage.removeItem('jwt_token');
    this.resetUser();
  }

  userRegister(payload) {
    console.log(payload);
    const userRegUrl = this.baseUrl + 'users';
    return this.http.post(userRegUrl, payload)
  }

  // checkAuthEndPt() {
  //   const testUrl = this.baseUrl + 'protected';
  //   const headers = new HttpHeaders()
  //     .append('Content-Type', 'application/json')
  //     .append('Accept', 'application/json')
  //     .append('Authorization', 'Bearer ' + localStorage.getItem('jwt_token'));
  //   console.log(headers);
  //   return this.http.get(testUrl, { headers })
  // }

  processToken(token) {
    localStorage.setItem('jwt_token', token);
    this.parseToken(token);
  }

  parseToken(token) {
    const tokenB64 = token
      .split('.')[1]
      .replace('-', '+')
      .replace('_', '/');
    const tokenObj = JSON.parse(atob(tokenB64));

    this.currUser = Object.assign( {}, this.currUser, {
      username: tokenObj.user.username,
      city: tokenObj.user.city,
      state: tokenObj.user.state,
      district: tokenObj.user.district,
      admin: tokenObj.user.adminuser,
      hasVoted: tokenObj.user.hasVoted,
      expires: tokenObj.exp
    })
  }

  resetUser() {
    this.currUser = Object.assign( {}, this.currUser, {
      username: 'no session',
      city: '',
      state: '',
      district: '',
      admin: false,
      hasVoted: true,
      expires: new Date()
    })
  }

}
