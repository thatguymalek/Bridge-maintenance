import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalAlerts = 0;
  totalUsers = 0;
  systemStatus = 'Loading...';

  constructor() {}

  ngOnInit(): void {
    // Fetch data from API or backend
    this.fetchDashboardData();
  }

  fetchDashboardData() {
    // Example: Replace with actual API calls
    this.totalAlerts = 50; // Mock data
    this.totalUsers = 100; // Mock data
    this.systemStatus = 'Healthy'; // Mock data
  }
}
