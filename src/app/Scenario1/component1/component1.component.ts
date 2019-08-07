import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scenario1-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Scenario1Component1 implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public consoleLog(name) {
      console.log(name);
  }

}
