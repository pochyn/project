import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  inputs: ['type'],
  outputs: ['onTypeSelected'],
  selector: 'app-kv-bar',
  templateUrl: './kv-bar.component.html',
  styleUrls: ['./kv-bar.component.css']
})
export class KvBarComponent implements OnInit {
  type = "gazeta"
  onTypeSelected: EventEmitter<string>;
  constructor() { 
    this.onTypeSelected = new EventEmitter();
  }

  ngOnInit() {
    this.type = "gazeta"
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

}
