import { Component } from '@angular/core';
import { LoginService } from '../shared/signin.service';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  client = {
    user: '',
    pwd: ''
  };

  constructor(private loginService: LoginService, private router: Router, private userService: UserService) {}

  login() {
    this.loginService.signIn(this.client).subscribe({
      next: (data) => {
        // console.log(data);
        this.userService.setUser(data);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);

      }
    });
    this.client.user = '';
    this.client.pwd = '';
  }
}
