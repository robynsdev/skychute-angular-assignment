import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentAppOneComponent } from './components/parent-app-one/parent-app-one.component';
import { ChildAppOneComponent } from './components/child-app-one/child-app-one.component';

import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent, ParentAppOneComponent, ChildAppOneComponent],
  imports: [BrowserModule, AppRoutingModule, MatInputModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
