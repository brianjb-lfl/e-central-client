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
  hasVotedBlock = false;

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
          console.log(this.authService.currUser);
          if(this.authService.currUser.adminUser) {
            this.router.navigate(['/races-admin']);
          }
          else {
            if(this.authService.currUser.hasVoted) {
              this.hasVotedBlock = true;
            }
            else {
              this.router.navigate(['/vote']);
            }
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
