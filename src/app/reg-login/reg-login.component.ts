import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Headers, RequestOptions, Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-reg-login',
  templateUrl: './reg-login.component.html',
  styleUrls: ['./reg-login.component.css']
})
export class RegLoginComponent implements OnInit {

  loginUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient ) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    // const b64Encoded = btoa(`${form.value.username}:${form.value.password}`);
    // headers.append("Authorization", "Basic " + btoa(`${form.value.username}:${form.value.password}`));

    const headers = new HttpHeaders()
      .set("Authorization", "Basic " + btoa(`${form.value.username}:${form.value.password}`));
    console.log(headers);
    return this.http.post(
        this.loginUrl,
        {headers})
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}

