import { Component, OnDestroy } from '@angular/core';
import { AddInsuranceRequest } from '../models/add-insurance-request.model';
import { InsuranceService } from '../services/insurance.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.css']
})
export class AddInsuranceComponent implements OnDestroy {

  model: AddInsuranceRequest;
  private addInsuranceSubscription?: Subscription;

  constructor(private insuranceService: InsuranceService,
    private router: Router) {
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
        this.router.navigateByUrl('/admin/insurances');
      }
    })
  }
}
