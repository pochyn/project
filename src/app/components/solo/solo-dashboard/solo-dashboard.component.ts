import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SoloBarComponent } from '../solo-bar/solo-bar.component'

@Component({
  selector: 'app-solo-dashboard',
  templateUrl: './solo-dashboard.component.html',
  styleUrls: ['./solo-dashboard.component.css']
})
export class SoloDashboardComponent implements OnInit {
  @ViewChild(SoloBarComponent) child;
  constructor() { }
  type = "gazeta";

  ngOnInit() {
    
  }
  typeSelected(type: string): void {
    this.type = type;
  }

}
