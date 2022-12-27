import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../shared/user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message!: string;
  userForm!: FormGroup;
  user: User = new User('admin', '123');

  constructor(private authService: AuthService,
              private router: Router,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
    this.setMessage();
  }

  login(): void {
    this.setMessage('Trying to log in...');
    this.authService.login(this.user.login, this.user.password).subscribe({
      next: res => {
        this.setMessage();
        if (!this.authService.isLoggedIn) return;
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        this.router.navigate([redirect]).then();
      }
    });
  }

  logout(): void {
    this.setMessage();
    this.authService.logout();
  }

  private initializeForm(): void {
    this.userForm = this.fb.group({
      login: [this.user.login],
      password: [this.user.password],
    });
  }

  private setMessage(msg: string = ''): void {
    if (msg) {
      this.message = msg;
      return;
    }
    this.message = `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`;
  }
}
