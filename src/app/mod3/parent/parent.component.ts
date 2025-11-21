import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, NgIf],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

    parentName = 'Himanshu'; // simple string input
  parentUser = { id: 101, name: 'Ravi' }; // object input

  lastMessageFromChild = '';

  handleGreet(msg: string) {
    // called when child emits
    this.lastMessageFromChild = msg;
    console.log('Message from child:', msg);
  }

  changeName() {
    // Demonstrate @Input change
    this.parentName = this.parentName === 'Himanshu' ? 'Ankit' : 'Himanshu';

    // Note: if OnPush and mutating object, prefer replacing object reference:
    this.parentUser = { ...this.parentUser, name: this.parentUser.name === 'Ravi' ? 'Suresh' : 'Ravi' };
  }

}
