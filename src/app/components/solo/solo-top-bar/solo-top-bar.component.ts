import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {SoloNewTopicComponent} from '../solo-new-topic/solo-new-topic.component';
import {MatDialog} from '@angular/material';
import {SoloArchieveComponent } from '../solo-archieve/solo-archieve.component';
import { MediaplanComponent } from '../../mediaplan/mediaplan.component';
import { AllSettingsComponent } from '../../all-settings/all-settings.component';
declare var electron: any;  
@Component({
  selector: 'app-solo-top-bar',
  templateUrl: './solo-top-bar.component.html',
  styleUrls: ['./solo-top-bar.component.css']
})
export class SoloTopBarComponent implements OnInit {
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
    this.dialogRef.open(SoloNewTopicComponent, {
      width: '90vw',
      data: {
        regime: regime,
      }
    });
  }
  showArchieve(){
    this.dialogRef.open(SoloArchieveComponent, {
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
    this.dialogRef.open(AllSettingsComponent, {
      width: '90vw',
    });
  }
}