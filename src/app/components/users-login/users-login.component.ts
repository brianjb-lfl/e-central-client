import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private authService: AuthService,
    private router: Router) { }

  onSubmit(form: NgForm) {
    this.authService.userLogin(this.username, this.password)
      .subscribe( 
        res => {
          this.username = '';
          this.password = '';
          this.authService.processToken(res['authToken']);
          if(this.authService.currUser.adminUser) {
            this.router.navigate(['/races-admin']);
          }
          else {
            this.router.navigate(['/results']);
          }
        },
        error => {
          console.log(error);
        }
      )
  }

  onCancelLogin() {
    this.authService.userLogout();
    this.router.navigate(['/']);
  }

  onRegClick() {
    this.router.navigate(['/register']);
  }

  // onTest() {
  //   this.authService.checkAuthEndPt()
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //       }
  //     )
  // }

}
