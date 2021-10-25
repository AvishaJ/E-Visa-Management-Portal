import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  getVisaReports() {
    return this.http.get('http://localhost:3000/request');
  }

  constructor(private http: HttpClient) { }
}
