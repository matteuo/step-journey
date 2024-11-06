import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent {
  @Input() color: string = '#BDBDBD';
  @Input() width: string = '4px';
}
