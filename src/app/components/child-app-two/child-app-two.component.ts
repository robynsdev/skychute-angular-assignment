import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-app-two',
  templateUrl: './child-app-two.component.html',
  styleUrls: ['./child-app-two.component.css'],
})
export class ChildAppTwoComponent implements OnInit {
  inputText: string;
  @Output() public inputTextChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  inputChanged(event: KeyboardEvent) {
    this.inputText = (event.target as HTMLInputElement).value;
    this.inputTextChange.emit(this.inputText);
  }
}
