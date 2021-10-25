
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApplyService {
  constructor(private http: HttpClient) { }

  getApply() {
    return this.http.get('http://localhost:3000/request');
  }

  getSingleApply(id:any) {
    return this.http.get(`http://localhost:3000/request/${id}`);
  }

  postApply(data:any) {
    return this.http.post('http://localhost:3000/request', data);
  }
  
  updateApply(id :any, data:any) {
    return this.http.put(`http://localhost:3000/request/${id}`, data);
  }

}
