import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { ChildAppFourComponent } from '../child-app-four/child-app-four.component';

@Component({
  selector: 'app-parent-app-four',
  templateUrl: './parent-app-four.component.html',
  styleUrls: ['./parent-app-four.component.css'],
})
export class ParentAppFourComponent implements OnInit {
  @ViewChild('childApp', { static: false }) childApp: ChildAppFourComponent;
  inputText: string;

  messageEmitter = new BehaviorSubject<string>('');

  setMessage(message: string) {
    this.messageEmitter.next(message);
  }

  getMessage(): string {
    return this.childApp.text.getValue();
  }

  constructor() {}

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.childApp.text.unsubscribe();
  }
}
