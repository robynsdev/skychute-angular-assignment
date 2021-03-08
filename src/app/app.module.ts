import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

import { ParentAppOneComponent } from './components/parent-app-one/parent-app-one.component';
import { ChildAppOneComponent } from './components/child-app-one/child-app-one.component';
import { ParentAppTwoComponent } from './components/parent-app-two/parent-app-two.component';
import { ChildAppTwoComponent } from './components/child-app-two/child-app-two.component';
import { ParentAppThreeComponent } from './components/parent-app-three/parent-app-three.component';
import { ChildAppThreeComponent } from './components/child-app-three/child-app-three.component';
import { HelperService } from './services/helper.service';
import { Help } from '@material-ui/icons';

@NgModule({
  declarations: [
    AppComponent,
    ParentAppOneComponent,
    ChildAppOneComponent,
    NavComponent,
    ParentAppTwoComponent,
    ChildAppTwoComponent,
    ParentAppThreeComponent,
    ChildAppThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatTabsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
