import { Component, input, ViewEncapsulation, inject, ElementRef, ContentChild, contentChild } from '@angular/core';

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

  // @ContentChild('input') private control?: ElementRef<
  // HTMLInputElement | HTMLTextAreaElement>;

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement >>('input');

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control());
  }
}
