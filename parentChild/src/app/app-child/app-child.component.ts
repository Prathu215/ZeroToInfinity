import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {
  ngOnInit(): void {
   console.log("employee object in child component:",this.employee)
  }
  newSalary:any;
 
  @Output()
  public updateSalary = new EventEmitter();
  @Input()
  employee : any ;

  update(){
    // alert(this.newSalary);
    this.updateSalary.emit(this.newSalary);
    // emits an event to handle all event handlers
  }

}
