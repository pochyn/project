import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {NewTopicComponent} from '../new-topic/new-topic.component';
import {MatDialog} from '@angular/material';
import { ArchieveComponent } from '../archieve/archieve.component';
declare var electron: any;  

@Component({
  selector: 'app-top-bar-dashboard',
  templateUrl: './top-bar-dashboard.component.html',
  styleUrls: ['./top-bar-dashboard.component.css']
})
export class TopBarDashboardComponent implements OnInit {

  constructor(private auth: AuthService, private dialogRef: MatDialog) { }

  ngOnInit() {
  }

  close(){
    electron.ipcRenderer.send('close');
  }

  minimize(){
    electron.ipcRenderer.send('minimize');
  }

  logout() {
    this.auth.logout();
  }
  
  //add Post
  addPost() {
    this.dialogRef.open(NewTopicComponent, {
      height: '90vh',
      width: '90vw',
    });
  }
  showArchieve(){
    this.dialogRef.open(ArchieveComponent, {
      height: '90vh',
      width: '90vw',
    });
  }

}
