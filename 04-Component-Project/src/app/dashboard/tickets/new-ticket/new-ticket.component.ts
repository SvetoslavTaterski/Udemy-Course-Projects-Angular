import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;

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
    console.log(title);
    console.log(ticketText);

    this.form?.nativeElement.reset();
  }
}
