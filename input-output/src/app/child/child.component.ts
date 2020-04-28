import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
   @Output() childEvent = new EventEmitter();
   @Input() PData :number;
  constructor() { }

  ngOnInit() {
  }

  onChange(value){
this.childEvent.emit(value);
  }

}
