import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  selectedTab: string = 'home'; // Default tab

  // Function to switch between tabs
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
