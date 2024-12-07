import { Injectable } from '@angular/core';
import { AddInsuranceRequest } from '../models/add-insurance-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private http: HttpClient) { }

  addInsurance(model: AddInsuranceRequest): Observable<void> {
    return this.http.post<void>('https://localhost:7280/api/Insurances', model);
  }
}
