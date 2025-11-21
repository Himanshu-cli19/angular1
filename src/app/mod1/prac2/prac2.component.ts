import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-prac2',
  imports: [],
  templateUrl: './prac2.component.html',
  styleUrl: './prac2.component.scss',
  standalone:true
})
export class Prac2Component {

  @Input() childInput!: string;
  @Output() dataEve = new EventEmitter<string>()



  click(){
    this.dataEve.emit('hello parent child is sending data')
  }


}
