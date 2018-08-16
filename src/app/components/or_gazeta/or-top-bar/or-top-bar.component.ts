import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
//import {GrNewTopicComponent} from '../gr-new-topic/gr-new-topic.component';
import {MatDialog} from '@angular/material';
import {ArchieveOrGazetaComponent } from '../archieve-or-gazeta/archieve-or-gazeta.component';
import { OrGazetaNewTopicComponent } from '../or-gazeta-new-topic/or-gazeta-new-topic.component'
import { MediaplanComponent } from '../../mediaplan/mediaplan.component';
declare var electron: any;  

@Component({
  selector: 'app-or-top-bar',
  templateUrl: './or-top-bar.component.html',
  styleUrls: ['./or-top-bar.component.css']
})
export class OrTopBarComponent implements OnInit {

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
    this.dialogRef.open(OrGazetaNewTopicComponent, {
      width: '90vw',
      data: {
        regime: regime,
      }
    });
  }
  showArchieve(){
    this.dialogRef.open(ArchieveOrGazetaComponent, {
      height: '90vh',
      width: '90vw',
    });
  }

  addMediaplan(){
    this.dialogRef.open(MediaplanComponent, {
      width: '90vw',
    });
  }
}
