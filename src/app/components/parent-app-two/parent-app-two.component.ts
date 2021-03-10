import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-app-two',
  templateUrl: './parent-app-two.component.html',
  styleUrls: ['./parent-app-two.component.css'],
})
export class ParentAppTwoComponent implements OnInit {
  outputText: string = '';

  constructor() {}

  changeDisplayText(event: string) {
    this.outputText = event;
  }

  ngOnInit(): void {}
}
