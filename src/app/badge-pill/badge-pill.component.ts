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
        return 'rgba(40, 199, 111, 0.12)'
      case 'warning':
        return 'rgb(255,159,67, 0.12)'
      case 'error':
        return 'rgba(234, 84, 85, 0.12)'
      case 'neutral':
      default:
        return 'rgba(20, 79, 106, 0.12)'
    }
  }

  get textColor() { 
    switch(this.variant) {
      case 'success':
        return '#28c76f'
      case 'warning':
        return '#ff9f43'
      case 'error':
        return '#ea5455'
      case 'neutral':
      default:
        return '#144F6A'
    }
  }
}
