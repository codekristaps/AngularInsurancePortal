import { Component, OnInit } from '@angular/core';
import { Insurance } from '../models/insurance.model';
import { InsuranceService } from '../services/insurance.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent implements OnInit {

  insurances$?: Observable<Insurance[]>;

  constructor(private insuranceService: InsuranceService) {

  }

  ngOnInit(): void {
    this.insuranceService.getAllInsurances();
  }
}
