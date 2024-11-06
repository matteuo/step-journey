import { Component } from '@angular/core';
import { StepJourneyComponent } from 'step-journey';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';

  // Definisci la lista di steps iniziale
  steps: StepJourneyComponent["steps"] = [
    { label: 'Step 1', status: 'completed', color: '#4CAF50' },
    { label: 'Step 2', status: 'current', color: '#FF9800' },
    { label: 'Step 3', status: 'pending'},
    { label: 'Step 4', status: 'pending' }
  ];

  // Metodo per aggiornare la lista di steps
  updateSteps() {
    // Aggiorna con un nuovo riferimento per forzare l'aggiornamento del template
    this.steps = [
      { label: 'Step 1', status: 'completed', color: '#4CAF50' },
      { label: 'Step 2', status: 'completed' },
      { label: 'Step 3', status: 'current', color: '#FF9800' },
      { label: 'Step 4', status: 'pending' }
    ];
  }
}
