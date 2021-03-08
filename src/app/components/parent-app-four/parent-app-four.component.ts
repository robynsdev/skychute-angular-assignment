import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-parent-app-four',
  templateUrl: './parent-app-four.component.html',
  styleUrls: ['./parent-app-four.component.css'],
})
export class ParentAppFourComponent implements OnInit {
  inputText: string;
  private valueChange: Subscription;

  messageEmitter = new BehaviorSubject<string>('');

  setMessage(message: string) {
    this.messageEmitter.next(message);
  }

  getMessage(): Observable<string> {
    return this.messageEmitter.asObservable();
  }

  constructor() {}

  ngOnInit(): void {
    this.valueChange = this.getMessage().subscribe((message) => {
      this.inputText = message;
    });
  }

  ngOnDestroy() {
    this.valueChange.unsubscribe();
  }
}
