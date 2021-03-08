import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-child-app-three',
  templateUrl: './child-app-three.component.html',
  styleUrls: ['./child-app-three.component.css'],
})
export class ChildAppThreeComponent implements OnInit, OnDestroy {
  inputText: string = '';
  private getMessage: Subscription;

  constructor(private helperService: HelperService) {}

  ngOnInit() {
    this.getMessage = this.helperService.getMessage().subscribe((message) => {
      this.inputText = message;
    });
  }

  ngOnDestroy() {
    this.getMessage.unsubscribe();
  }
}
