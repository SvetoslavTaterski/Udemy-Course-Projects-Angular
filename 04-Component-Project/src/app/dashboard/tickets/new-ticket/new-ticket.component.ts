import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, viewChild, ViewChild, output } from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  //@Output() add = new EventEmitter();
  add = output<{title: string; text: string}>();

  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit(){
    console.log('ONINIT');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(){
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    this.add.emit({title: title, text: ticketText });

    this.form?.nativeElement.reset();
  }
}
