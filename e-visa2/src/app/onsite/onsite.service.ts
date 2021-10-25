import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class onSiteService {

  constructor(private http: HttpClient) { }

  getPersons() {
    return this.http.get('http://localhost:3000/request');
  }

  getSingleVisa(id:any) {
    return this.http.get(`http://localhost:3000/visa/${id}`);
  }

  postOnSite(data:any) {
    return this.http.post('http://localhost:3000/visa', data );
  }

  putOnSite(id:any,data:any) {
    return this.http.put(`http://localhost:3000/visa/${id}`, data );
  }

  getOnSite() {
    return this.http.get('http://localhost:3000/visa');
  }
}
