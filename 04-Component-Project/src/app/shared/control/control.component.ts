import { Component, input, ViewEncapsulation, inject, ElementRef, ContentChild, contentChild, AfterContentInit, afterRender, afterNextRender } from '@angular/core';

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
export class ControlComponent implements AfterContentInit{
  //@HostBinding('class') className= 'control';
  //@HostListener()
  
  private el = inject(ElementRef);
  
  label = input.required<string>();
  
  // @ContentChild('input') private control?: ElementRef<
  // HTMLInputElement | HTMLTextAreaElement>;
  
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement >>('input');

  constructor() {
    afterRender(() => {
      console.log('After render');
    });

    afterNextRender(() => {
      console.log('After next render');
    });
  }
  
  ngAfterContentInit(){
    // ...
  }

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control());
  }
}
