import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public previewData$ = new BehaviorSubject({});
  public previewImage$ = new BehaviorSubject({});

  constructor(private http: HttpClient) {}

  pay() {
    this.http.get('http://localhost:3000/onPayment').subscribe();
  }
}
