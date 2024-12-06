import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  totalAlerts: number = 50; // Hardcoded value
  totalUsers: number = 100; // Hardcoded value
  systemStatus: string = 'Healthy'; // Hardcoded value

  constructor() {}

  ngOnInit() {
    // No service calls, use hardcoded values for now
    console.log('Dashboard initialized with mock data.');
  }
}
