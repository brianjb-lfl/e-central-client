import { Component, OnInit } from '@angular/core';
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

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.userRegister(this.user)
      .subscribe(
        res => {
          console.log('done');
        }
      )
    
  }

}
