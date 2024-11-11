import { Component } from '@angular/core';
import { StepJourneyComponent } from 'step-journey';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';

  // Define the list of starting steps
  steps: StepJourneyComponent["steps"] = [
    { label: 'Step 1', status: 'completed', color: '#4CAF50' },
    { label: 'Step 2', status: 'current', color: '#FF9800' },
    { label: 'Step 3', status: 'pending'},
    { label: 'Step 4', status: 'pending' }
  ];

  // Update the list of steps
  updateSteps() {
    this.steps = [
      { label: 'Step 1', status: 'completed', color: '#4CAF50' },
      { label: 'Step 2', status: 'completed' },
      { label: 'Step 3', status: 'completed' },
      { label: 'Step 4', status: 'current', color: '#FF9800' },
      { label: 'Step 5', status: 'pending' }
    ];
  }

}
