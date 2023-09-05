import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {BusinessCard} from './../interfaces/businessCard';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessCardService {
  private apiUrl = 'https://backend.stg.snapaddy.com/business-card/';

  constructor(private http: HttpClient) {}

   uploadBusinessCard(frontB64: string, backB64: string) : Observable<BusinessCard>{
    const headers = {  "x-api-key": environment.apiKey };
    const body = {front:frontB64, back :backB64};
    return this.http.post<BusinessCard>(this.apiUrl, body, {headers});
  }
}