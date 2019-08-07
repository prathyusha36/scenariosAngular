import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'scenario6-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Scenario6Component2 implements OnInit {

  public message="";
  @Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit(this.message);
  }

}
