import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reg-login',
  templateUrl: './reg-login.component.html',
  styleUrls: ['./reg-login.component.css']
})
export class RegLoginComponent implements OnInit {

  loginUrl = '/api/auth/login/';

  constructor() { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    console.log(btoa(`${form.value.username}:${form.value.password}`));
    console.log(form.value.password);
  }

}

