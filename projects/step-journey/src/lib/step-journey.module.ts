import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepJourneyComponent } from './step-journey.component';
import { ProgressStepsComponent } from './progress-steps/progress-steps.component';
import { StepComponent } from './step/step.component';
import { DividerComponent } from './divider/divider.component';

@NgModule({
  declarations: [
    StepJourneyComponent,
    ProgressStepsComponent,
    StepComponent,
    DividerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StepJourneyComponent
  ]
})
export class StepJourneyModule {}
