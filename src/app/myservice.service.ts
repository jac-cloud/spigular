import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  users = [
    "pippo",
    "luca",
    "mauro",
    "gianpiero",
    "alberto",
    "franco"
  ]

  userSubject = new Subject<string[]>();
  users$ = this.userSubject.asObservable();

  loadUsers() {
    setTimeout(() => {
      this.userSubject.next(this.users);
    }, 1000);
  }

  addUser(user: string) {
    this.users.push(user);
    this.userSubject.next(this.users)
  }
}
