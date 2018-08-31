import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { OrSiteBarComponent } from '../or-site-bar/or-site-bar.component'


@Component({
  selector: 'app-dashboard-or-site',
  templateUrl: './dashboard-or-site.component.html',
  styleUrls: ['./dashboard-or-site.component.css']
})
export class DashboardOrSiteComponent implements OnInit {
  @ViewChild(OrSiteBarComponent) child;
  constructor() { }
  type = "site";

  ngOnInit() {
  }


typeSelected(type: string): void {
  this.type = type;
}

}
