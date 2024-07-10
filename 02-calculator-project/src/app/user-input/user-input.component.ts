import { Component, EventEmitter, Output } from '@angular/core';
import { type InvestmentModel } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentModel>();

  initialInvestment = '100';
  annualInvestment = '299';
  expectedReturn = '123';
  duration = '999';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      duration: +this.duration,
      expectedReturn: +this.expectedReturn,
      annualInvestment: +this.annualInvestment,
    });
  }
}
