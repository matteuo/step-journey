import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent {
  @Input() color: string = '#808080';
  @Input() width: string = '4px';
}
