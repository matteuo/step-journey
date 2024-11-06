import { NgModule } from '@angular/core';
import { StepJourneyComponent } from './step-journey.component';
import { StepComponent } from './step/step.component';
import { DividerComponent } from './divider/divider.component';
import { ProgressStepsComponent } from './progress-steps/progress-steps.component';



@NgModule({
  declarations: [
    StepJourneyComponent,
    StepComponent,
    DividerComponent,
    ProgressStepsComponent
  ],
  imports: [
  ],
  exports: [
    StepJourneyComponent
  ]
})
export class StepJourneyModule { }
