import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentAppOneComponent } from './components/parent-app-one/parent-app-one.component';
import { ChildAppOneComponent } from './components/child-app-one/child-app-one.component';

import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [AppComponent, ParentAppOneComponent, ChildAppOneComponent],
  imports: [BrowserModule, AppRoutingModule, MatFormFieldModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
