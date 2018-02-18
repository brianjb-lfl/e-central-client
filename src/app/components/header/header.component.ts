import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currUserName = '';

  constructor(
    private authService: AuthService,
    private router: Router) {
      this.authService.userChanged.subscribe(
        (username: string) => this.currUserName = username
      )
  }

  ngOnInit() {
    console.log('username', this.currUserName);
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  onLogout() {
    this.authService.userLogout();
    this.router.navigate(['/']);
  }

}
