import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-app-two',
  templateUrl: './parent-app-two.component.html',
  styleUrls: ['./parent-app-two.component.css'],
})
export class ParentAppTwoComponent implements OnInit {
  inputText: string = '';

  constructor() {}

  changeDisplayedText(event: string){
    this.inputText = event;
  }

  ngOnInit(): void {}
}
