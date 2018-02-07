import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reg-login',
  templateUrl: './reg-login.component.html',
  styleUrls: ['./reg-login.component.css']
})
export class RegLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    console.log(form.value);
  }

}
