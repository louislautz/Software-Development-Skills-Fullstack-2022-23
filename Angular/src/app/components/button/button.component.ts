import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() color: string = "#6A7EFC";
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
