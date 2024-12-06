import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  totalAlerts: number = 0;
  totalUsers: number = 0;
  systemStatus: string = 'Loading...';

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getAlertsCount().subscribe((data: { count: number }) => {
      this.totalAlerts = data.count;
    });
    this.dashboardService.getUsersCount().subscribe((data: { count: number }) => {
      this.totalUsers = data.count;
    });
    this.dashboardService.getSystemStatus().subscribe((data: { status: string }) => {
      this.systemStatus = data.status;
    });
  }
}
