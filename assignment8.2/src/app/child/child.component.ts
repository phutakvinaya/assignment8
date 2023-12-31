import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() textparent:any;

  @Output()  textchild = new EventEmitter();

  
  sendmessage(){
    this.textchild.emit("hello from child")
  }
  
}
