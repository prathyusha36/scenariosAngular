import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'scenario4-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Scenario4Component2 implements OnInit {

  public name="";
  @Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public fire() {
    this.childEvent.emit(this.name);
  }

}
