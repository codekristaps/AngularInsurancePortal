import { Injectable } from '@angular/core';
import { AddInsuranceRequest } from '../models/add-insurance-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Insurance } from '../models/insurance.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private http: HttpClient) { }

  addInsurance(model: AddInsuranceRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Insurances`, model);
  }

  getAllInsurances(): Observable<Insurance[]>{
    return this.http.get<Insurance[]>(`${environment.apiBaseUrl}/api/Insurances`);
  }
}
