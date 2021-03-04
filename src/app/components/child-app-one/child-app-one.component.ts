import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-app-one',
  templateUrl: './child-app-one.component.html',
  styleUrls: ['./child-app-one.component.css'],
})
export class ChildAppOneComponent {
  @Input() inputText: string = '';

  constructor() {}

  ngOnInit(): void {}
}
