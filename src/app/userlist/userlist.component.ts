import { Component, inject } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-userlist',
  imports: [],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
  service = inject(MyserviceService)
  users: string[] = []

  ngOnInit() {
    this.service.users$.subscribe(users => this.users = users)
    this.service.loadUsers();
  }
}
