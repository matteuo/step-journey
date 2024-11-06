import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent {
  @Input() label!: string;
  @Input() subLabel?: string;
  @Input() status: 'completed' | 'current' | 'pending' = 'pending';
  @Input() color?: string;
  
  @Input() defaultColor: { completed: string; current: string; pending: string } = {
    completed: '#4CAF50',
    current: '#FF9800',
    pending: '#BDBDBD'
  };

  get currentColor(): string {
    return this.color || (this.status === 'completed' ? this.defaultColor.completed :
                          this.status === 'current' ? this.defaultColor.current :
                          this.defaultColor.pending);
  }
}