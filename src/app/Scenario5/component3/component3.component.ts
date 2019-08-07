import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'scenario5-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Scenario5Component3 implements OnInit {

  public name="";
  @Output() grandChildEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public fire() {
    this.grandChildEvent.emit(this.name);
  }

}
