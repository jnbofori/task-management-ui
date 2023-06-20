import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge-pill',
  templateUrl: './badge-pill.component.html',
  styleUrls: ['./badge-pill.component.css']
})
export class BadgePillComponent {
  @Input() text!: string;
  @Input() variant!: 'success' | 'warning' | 'error' | 'neutral';

  get backgroundColor() { 
    switch(this.variant) {
      case 'success':
        return '#DCEDC8'
      case 'warning':
        return '#FFCC80'
      case 'error':
        return '#FF8A80'
      case 'neutral':
      default:
        return '#777'
    }
  }
}
