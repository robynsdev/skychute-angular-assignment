import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-app-two',
  templateUrl: './child-app-two.component.html',
  styleUrls: ['./child-app-two.component.css'],
})
export class ChildAppTwoComponent implements OnInit {
  @Input() inputText: string;
  @Output() public inputTextChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  change(value) {
    this.inputText = value;
    this.inputTextChange.emit(value);
  }
}
