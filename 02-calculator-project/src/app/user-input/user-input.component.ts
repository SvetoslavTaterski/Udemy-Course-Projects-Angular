import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = '100';
  annualInvestment = '299';
  
  expectedReturn = '123';
  duration = '999';

  onSubmit() {
    console.log(this.initialInvestment);
    console.log(this.annualInvestment);
    console.log(this.expectedReturn);
    console.log(this.duration);
  }
}
