import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-users-register',
  templateUrl: './users-register.component.html',
  styleUrls: ['./users-register.component.css']
})
export class UsersRegisterComponent implements OnInit {

  user = {
    username: '',
    password: '',
    city: '',
    state: '',
    district: '',
    adminUser: false
  }

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.userRegister(this.user)
      .subscribe(
        res => {
          this.router.navigate(['/login'])
        }
      )
    
  }

  onCancel() {
    this.user.username = '';
    this.user.password = '';
    this.user.city = '';
    this.user.state = '';
    this.user.district = '';
    this.user.adminUser = false;

    this.router.navigate(['/']);
  }

}
