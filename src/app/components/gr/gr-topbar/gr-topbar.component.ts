import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {GrNewTopicComponent} from '../gr-new-topic/gr-new-topic.component';
import {MatDialog} from '@angular/material';
import {GrArchieveComponent } from '../gr-archieve/gr-archieve.component';
import { MediaplanComponent } from '../../mediaplan/mediaplan.component';
import { GrSettingsComponent } from '../../gr/gr-settings/gr-settings.component';
declare var electron: any;  

@Component({
  selector: 'app-gr-topbar',
  templateUrl: './gr-topbar.component.html',
  styleUrls: ['./gr-topbar.component.css']
})
export class GrTopbarComponent implements OnInit {

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
  addPost(regime) {
    this.dialogRef.open(GrNewTopicComponent, {
      width: '90vw',
      data: {
        regime: regime,
      }
    });
  }
  showArchieve(){
    this.dialogRef.open(GrArchieveComponent, {
      height: '90vh',
      width: '90vw',
    });
  }

  addMediaplan(){
    this.dialogRef.open(MediaplanComponent, {
      width: '90vw',
    });
  }

  settings(){
    this.dialogRef.open(GrSettingsComponent, {
      width: '90vw',
    });
  }
  
}
