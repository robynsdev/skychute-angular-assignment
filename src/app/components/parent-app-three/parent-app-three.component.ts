import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent-app-three',
  templateUrl: './parent-app-three.component.html',
  styleUrls: ['./parent-app-three.component.css'],
})
export class ParentAppThreeComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      inputText: '',
    });
  }
}
