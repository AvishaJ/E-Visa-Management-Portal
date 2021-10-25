import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoreReportsService {

  getVisaReports() {
    return this.http.get('http://localhost:3000/visa');
  }

  constructor(private http: HttpClient) { }
}
