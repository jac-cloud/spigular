import { Component, inject } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-usergenerator',
  imports: [],
  templateUrl: './usergenerator.component.html',
  styleUrl: './usergenerator.component.css'
})
export class UsergeneratorComponent {
  constructor(private service: MyserviceService) {
  }

  toAdd = ""

  onInputChange(target: EventTarget | null) {
    this.toAdd = (target as HTMLInputElement).value
  }

  onAdd() {
    this.service.addUser(this.toAdd);
    this.toAdd = ""
  }
}
