import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  activeLink: string = '';
  constructor(private readonly router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.url;
        console.log(this.activeLink);
      }
    });
  }
  dashboardClicked = false;
  electricityClicked = false;
  waterClicked = false;
  telephoneClicked = false;

  onDashboardClicked() {
    this.dashboardClicked = true;
    this.electricityClicked = false;
    this.waterClicked = false;
    this.telephoneClicked = false;
  }

  onElectricityClicked() {
    this.dashboardClicked = false;
    this.electricityClicked = true;
    this.waterClicked = false;
    this.telephoneClicked = false;
  }

  onWaterClicked() {
    this.dashboardClicked = false;
    this.electricityClicked = false;
    this.waterClicked = true;
    this.telephoneClicked = false;
  }

  onTelephoneClicked() {
    this.dashboardClicked = false;
    this.electricityClicked = false;
    this.waterClicked = false;
    this.telephoneClicked = true;
  }
}
