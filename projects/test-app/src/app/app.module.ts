import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StepJourneyModule } from 'step-journey';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StepJourneyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
