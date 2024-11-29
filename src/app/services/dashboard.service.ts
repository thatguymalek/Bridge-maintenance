import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  constructor(private http: HttpClient, private injector: Injector) {}



  getAlertsCount(): Observable<{ count: number }> {
    return this.http.get<{ count: number }>('/api/alerts/count');
  }

  getUsersCount(): Observable<{ count: number }> {
    return this.http.get<{ count: number }>('/api/users/count');
  }

  getSystemStatus(): Observable<{ status: string }> {
    return this.http.get<{ status: string }>('/api/system/status');
  }
}
