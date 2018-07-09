import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { KvBarComponent } from '../kv-bar/kv-bar.component'

@Component({
  selector: 'app-kv-dashboard',
  templateUrl: './kv-dashboard.component.html',
  styleUrls: ['./kv-dashboard.component.css']
})
export class KvDashboardComponent implements OnInit {
  @ViewChild(KvBarComponent) child;
  constructor() { }
  type = "gazeta";

  ngOnInit() {
    
  }
  typeSelected(type: string): void {
    this.type = type;
  }

}
