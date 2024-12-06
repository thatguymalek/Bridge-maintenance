import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getAlertsCount(): Observable<{ count: number }> {
    // Replace '/api/alerts/count' with the correct endpoint
    return this.http.get<{ count: number }>('/api/alerts/count');
  }

  getUsersCount(): Observable<{ count: number }> {
    // Replace '/api/users/count' with the correct endpoint
    return this.http.get<{ count: number }>('/api/users/count');
  }

  getSystemStatus(): Observable<{ status: string }> {
    // Replace '/api/system/status' with the correct endpoint
    return this.http.get<{ status: string }>('/api/system/status');
  }
}
