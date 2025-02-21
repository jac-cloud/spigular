import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  @Output() onCount = new EventEmitter<number>();

  count = 0

  increment() {
    this.count = this.count + 1
    this.onCount.emit(this.count)
  }
}
