import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-reg-login',
  templateUrl: './reg-login.component.html',
  styleUrls: ['./reg-login.component.css']
})
export class RegLoginComponent implements OnInit {

  loginUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: Http ) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    let b64Encoded = btoa(`${form.value.username}:${form.value.password}`);
    return this.http.post(this.loginUrl, b64Encoded)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}

