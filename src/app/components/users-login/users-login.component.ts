import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent {

  username = '';
  password='';


  constructor(private authService: AuthService) { }

  onSubmit(form: NgForm) {
    this.authService.userLogin(this.username, this.password)
      .subscribe(
        (token:any[]) => {
          let workingToken = token['authToken'];
          let base64Url = workingToken.split('.')[1];
          let base64 = base64Url.replace('-', '+').replace('_', '/');
          console.log(JSON.parse(atob(base64)));
          //localStorage.setItem('jwt_token', token);
        },
        err => console.log(err)
      );
  }

}
