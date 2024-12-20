import { Component, Input } from '@angular/core';
import { Step, ColorConfig } from './step-journey.types';

@Component({
  selector: 'lib-step-journey',
  template: `<lib-progress-steps [steps]="steps" [colorConfig]="colorConfig" [dividerWidth]="dividerWidth" [maxWidth]="maxWidth" [fontSize]="fontSize"></lib-progress-steps>`,
})
export class StepJourneyComponent {
  @Input() steps: Step[] = [];
  @Input() colorConfig: ColorConfig = {
    completed: '#4CAF50',
    current: '#FF9800',
    pending: '#808080'
  };
  @Input() dividerWidth: string = '4px';
  @Input() maxWidth: string = '600px';
  @Input() fontSize: string = '0.7em';
}
