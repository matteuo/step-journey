import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css'],
  standalone: false
})
export class DividerComponent {
  @Input() color: string = '#808080';
  @Input() width: string = '4px';
}
