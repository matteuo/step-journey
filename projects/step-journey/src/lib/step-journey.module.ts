import { NgModule } from '@angular/core';
import { StepJourneyComponent } from './step-journey.component';
import { StepComponent } from './step/step.component';
import { DividerComponent } from './divider/divider.component';



@NgModule({
  declarations: [
    StepJourneyComponent,
    StepComponent,
    DividerComponent
  ],
  imports: [
  ],
  exports: [
    StepJourneyComponent
  ]
})
export class StepJourneyModule { }
