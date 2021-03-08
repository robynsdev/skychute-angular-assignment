import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-app-one',
  templateUrl: './parent-app-one.component.html',
  styleUrls: ['./parent-app-one.component.css'],
})
export class ParentAppOneComponent implements OnInit {
  inputText: string = '';

  constructor() {}

  ngOnInit(): void {}

  // inputChange(value) {
  //   this.inputText = value.target.value + value.key;
  // }
}
