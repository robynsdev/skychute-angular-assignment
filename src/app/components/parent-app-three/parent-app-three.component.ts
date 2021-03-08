import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-parent-app-three',
  templateUrl: './parent-app-three.component.html',
  styleUrls: ['./parent-app-three.component.css'],
})
export class ParentAppThreeComponent implements OnInit {
  form: FormGroup;

  constructor(private helperService: HelperService) {}

  ngOnInit() {
    this.form = new FormGroup({
      inputText: new FormControl(null),
    });

    const a = this.form.get('inputText');
    a.valueChanges.subscribe((value) => this.helperService.nextMessage(value));
  }
}
