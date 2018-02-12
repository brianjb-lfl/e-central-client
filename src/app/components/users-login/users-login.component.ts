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
  password = '';

  constructor(private authService: AuthService) { }

  onSubmit(form: NgForm) {
    this.authService.userLogin(this.username, this.password)
      .subscribe( 
        res => {
          console.log('submit before');
          console.log(this.authService.currUser);
          this.username = '';
          this.password = '';
          this.authService.processToken(res['authToken']);
          console.log(this.authService.currUser);
          console.log(this.authService.currUser);
        },
        error => {
          console.log(error);
        }
      )
  }

  onLogout() {
    this.authService.userLogout();
    console.log('component logout');
    console.log(this.authService.currUser);
  }

}
