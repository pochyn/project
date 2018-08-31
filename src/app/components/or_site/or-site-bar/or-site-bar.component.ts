import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  inputs: ['type'],
  outputs: ['onTypeSelected'],
  selector: 'app-or-site-bar',
  templateUrl: './or-site-bar.component.html',
  styleUrls: ['./or-site-bar.component.css']
})
export class OrSiteBarComponent implements OnInit {


  type = "site"
  onTypeSelected: EventEmitter<string>;
  constructor() { 
    this.onTypeSelected = new EventEmitter();
  }

  ngOnInit() {
    this.type = "site"
    this.onTypeSelected.emit(this.type);
  }
  site(){
    this.type = "site"
    this.onTypeSelected.emit(this.type);
  }
  lviv(){
    this.type = "lviv"
    this.onTypeSelected.emit(this.type);
  }
  gazeta(){
    this.type = "gazeta"
    this.onTypeSelected.emit(this.type);
  }
  regions(){
    this.type = "regions"
    this.onTypeSelected.emit(this.type);
  }

  media(){
    this.type = "media"
    this.onTypeSelected.emit(this.type);
  }

}