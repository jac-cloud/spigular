import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    name: '',
    email: '',
    bio: '',
    preferences: '',
    password: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted!', this.user);
      form.reset();
    }
  }

  onReset(form: NgForm) {
    form.reset();
  }
}
