import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'scenario6-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Scenario6Component3 implements OnInit {

  @Input() public data: string;

  constructor() { }

  ngOnInit() {
  }

}
