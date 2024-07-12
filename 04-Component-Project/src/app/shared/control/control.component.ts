import { Component, input, ViewEncapsulation, inject, ElementRef } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  //@HostBinding('class') className= 'control';
  //@HostListener()

  private el = inject(ElementRef);

  label = input.required<string>();

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
  }
}
