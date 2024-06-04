import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-home-design',
  templateUrl: './home-design.component.html',
  styleUrls: ['./home-design.component.css']
})
export class HomeDesignComponent {
  user: any;
  menuOpen: boolean = false;

  constructor(private router: Router, private userService: UserService) {
    this.userService.currentUser.subscribe(user => {
      this.user = user;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.userService.clearUser();
    this.router.navigate(['/']);
  }
}

