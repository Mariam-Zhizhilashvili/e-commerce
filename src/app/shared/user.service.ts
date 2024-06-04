import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSource = new BehaviorSubject<any>(null);
  currentUser = this.userSource.asObservable();

  constructor() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.userSource.next(JSON.parse(storedUser));
    }
  }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.userSource.next(user);
  }

  clearUser() {
    localStorage.removeItem('user');
    this.userSource.next(null);
  }
}
