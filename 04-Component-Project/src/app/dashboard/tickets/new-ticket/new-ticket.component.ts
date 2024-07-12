import { Component } from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  onSubmit(titleElement: HTMLInputElement) {
    const eneredTitle = titleElement.value;
    console.log('Entered Title: ' + eneredTitle);
  }
}
