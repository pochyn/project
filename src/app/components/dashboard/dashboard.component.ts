import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BarComponent } from '../bar/bar.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(BarComponent) child;
  constructor() { }
  type = "gazeta";

  ngOnInit() {
    
  }
  typeSelected(type: string): void {
    this.type = type;
  }

}
