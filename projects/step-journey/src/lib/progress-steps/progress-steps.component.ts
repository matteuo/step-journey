import { Component, Input } from '@angular/core';
import { Step, ColorConfig } from '../step-journey.types';

@Component({
  selector: 'lib-progress-steps',
  templateUrl: './progress-steps.component.html',
  styleUrls: ['./progress-steps.component.css']
})
export class ProgressStepsComponent {
  @Input() steps: Step[] = [];
  @Input() colorConfig: ColorConfig = {
    completed: '#4CAF50',
    current: '#FF9800',
    pending: '#BDBDBD'
  };
  @Input() dividerWidth: string = '4px';
  @Input() maxWidth: string = '600px';
}
