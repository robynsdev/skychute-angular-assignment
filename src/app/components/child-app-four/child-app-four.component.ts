import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-child-app-four',
  templateUrl: './child-app-four.component.html',
  styleUrls: ['./child-app-four.component.css'],
})
export class ChildAppFourComponent implements OnInit {
  text = new BehaviorSubject<string>(null);

  form: FormGroup;
  private valueChange: Subscription;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      inputText: new FormControl(null),
    });

    const a = this.form.get('inputText');
    this.valueChange = a.valueChanges.subscribe((value) =>
      {
        this.text.next(value);
      }
    );
  }

  ngOnDestroy() {
    this.valueChange.unsubscribe();
  }
}
