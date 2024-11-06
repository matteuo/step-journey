import { Component, Input } from '@angular/core';

export interface Step {
  label: string;
  subLabel?: string;
  status: 'completed' | 'current' | 'pending';
  color?: string;
}

export interface ColorConfig {
  completed: string;
  current: string;
  pending: string;
}

@Component({
  selector: 'lib-step-journey',
  template: `<lib-progress-steps [steps]="steps" [colorConfig]="colorConfig"></lib-progress-steps>`,
})
export class StepJourneyComponent {
  @Input() steps: Step[] = [];
  @Input() colorConfig: ColorConfig = {
    completed: '#4CAF50',
    current: '#FF9800',
    pending: '#BDBDBD'
  };
}
