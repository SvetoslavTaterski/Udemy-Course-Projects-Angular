import { Component, input, ViewEncapsulation, inject, ElementRef, ContentChild, contentChild, AfterContentInit } from '@angular/core';

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
  
  ngAfterContentInit(){
    // ...
  }

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control());
  }
}
