import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Scenario1Component1 } from './Scenario1/component1/component1.component';
import { Scenario2Component1 } from './Scenario2/component1/component1.component';
import { Scenario3Component1 } from './Scenario3/component1/component1.component';
import { Scenario3Component2 } from './Scenario3/component2/component2.component';
import { Scenario4Component1 } from './Scenario4/component1/component1.component';
import { Scenario4Component2 } from './Scenario4/component2/component2.component';
import { Scenario5Component1 } from './Scenario5/component1/component1.component';
import { Scenario5Component2 } from './Scenario5/component2/component2.component';
import { Scenario5Component3 } from './Scenario5/component3/component3.component';
import { Scenario6Component1 } from './Scenario6/component1/component1.component';
import { Scenario6Component2 } from './Scenario6/component2/component2.component';
import { Scenario6Component3 } from './Scenario6/component3/component3.component';

@NgModule({
  declarations: [
    AppComponent,
    Scenario1Component1,
    Scenario2Component1,
    Scenario3Component1,
    Scenario3Component2,
    Scenario4Component1,
    Scenario4Component2,
    Scenario5Component1,
    Scenario5Component2,
    Scenario5Component3,
    Scenario6Component1,
    Scenario6Component2,
    Scenario6Component3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
