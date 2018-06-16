import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { GrBarComponent } from '../gr-bar/gr-bar.component'

@Component({
  selector: 'app-gr-dashboard',
  templateUrl: './gr-dashboard.component.html',
  styleUrls: ['./gr-dashboard.component.css']
})
export class GrDashboardComponent implements OnInit {
  @ViewChild(GrBarComponent) child;
  constructor() { }
  type = "gazeta";

  ngOnInit() {
    
  }
  typeSelected(type: string): void {
    this.type = type;
  }

}
