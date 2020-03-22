import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandComponent } from './parent/land/land.component';
import { SteptwoComponent } from './steptwo/steptwo.component';
import { StepthreeComponent } from './stepthree/stepthree.component';
import { CreateWidgetComponent } from './parent/create-widget/create-widget.component';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  declarations: [
    AppComponent,
    LandComponent,
    SteptwoComponent,
    StepthreeComponent,
    CreateWidgetComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
