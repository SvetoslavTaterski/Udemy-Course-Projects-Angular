import { Component, Input, input } from '@angular/core';
import { ResultData } from '../result-data.model';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  
  //This is like the @Input()
  //results = input<ResultData>();

  @Input({required: true}) results? : ResultData;
}
