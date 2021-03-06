import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {KvNewTopicComponent} from '../kv-new-topic/kv-new-topic.component';
import {MatDialog} from '@angular/material';
import {KvArchieveComponent } from '../kv-archieve/kv-archieve.component';
import { MediaplanComponent } from '../../mediaplan/mediaplan.component';
import { AllSettingsComponent } from '../../all-settings/all-settings.component';
declare var electron: any;  
@Component({
  selector: 'app-kv-top-bar',
  templateUrl: './kv-top-bar.component.html',
  styleUrls: ['./kv-top-bar.component.css']
})
export class KvTopBarComponent implements OnInit {

  
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
    this.dialogRef.open(KvNewTopicComponent, {
      width: '90vw',
      data: {
        regime: regime,
      }
    });
  }
  showArchieve(){
    this.dialogRef.open(KvArchieveComponent, {
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
