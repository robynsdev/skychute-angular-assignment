import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  onKeyup(event: string) {
    // (event.target as HTMLInputElement) is used because target might not have .value
    // typecast as HTMLInputElement, the correct HTML element which has value property
    // this.inputText = (event.target as HTMLInputElement).value;
    this.inputText = event;
    this.inputTextChange.emit(this.inputText);
  }
}
