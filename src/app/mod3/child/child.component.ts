import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [NgIf],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

    @Input() userName!: string;

  // Input: object example (immutable practice recommended)
  @Input() user?: { id: number; name: string };

  // Output: child se parent ko event bhejne ke liye
  @Output() greet: EventEmitter<string> = new EventEmitter<string>();

  onButtonClick() {
    // emit a payload (string)
    const message = `Hello ${this.userName || this.user?.name || 'Guest'}!`;
    this.greet.emit(message);
  }

}
