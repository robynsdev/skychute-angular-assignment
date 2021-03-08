import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child-app-four',
  templateUrl: './child-app-four.component.html',
  styleUrls: ['./child-app-four.component.css'],
})
export class ChildAppFourComponent implements OnInit {
  @Output() public outputText = new EventEmitter<string>();

  form: FormGroup;
  private valueChange: Subscription;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      inputText: new FormControl(null),
    });

    const a = this.form.get('inputText');
    this.valueChange = a.valueChanges.subscribe((value) =>
      this.outputText.emit(value)
    );
  }

  ngOnDestroy() {
    this.valueChange.unsubscribe();
  }
}
