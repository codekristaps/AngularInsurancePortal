import { Component, OnDestroy } from '@angular/core';
import { AddInsuranceRequest } from '../models/add-insurance-request.model';
import { InsuranceService } from '../services/insurance.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.css']
})
export class AddInsuranceComponent implements OnDestroy {

  model: AddInsuranceRequest;
  private addInsuranceSubscription?: Subscription;

  constructor(private insuranceService: InsuranceService) {
    this.model = {
      name: '',
      description: ''
    };
  }

  ngOnDestroy(): void {
    this.addInsuranceSubscription?.unsubscribe();
  }

  onFormSubmit() {
    this.addInsuranceSubscription = this.insuranceService.addInsurance(this.model)
    .subscribe({
      next: (response) => {
        console.log('This was successful!');
        
      }
    })
  }
}
