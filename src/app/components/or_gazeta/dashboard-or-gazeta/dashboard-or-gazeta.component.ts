import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { GazetaBarComponent } from '../gazeta-bar/gazeta-bar.component'


@Component({
  selector: 'app-dashboard-or-gazeta',
  templateUrl: './dashboard-or-gazeta.component.html',
  styleUrls: ['./dashboard-or-gazeta.component.css']
})
export class DashboardOrGazetaComponent implements OnInit {
  @ViewChild(GazetaBarComponent) child;
  constructor() { }
  type = "gazeta";

  ngOnInit() {
    
  }
  typeSelected(type: string): void {
    this.type = type;
  }

}