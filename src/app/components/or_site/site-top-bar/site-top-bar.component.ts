import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
//import {GrNewTopicComponent} from '../gr-new-topic/gr-new-topic.component';
import {MatDialog} from '@angular/material';
import {ArchieveOrSiteComponent } from '../archieve-or-site/archieve-or-site.component';
import { OrNewTopicComponent } from '../or-new-topic/or-new-topic.component'
import { MediaplanComponent } from '../../mediaplan/mediaplan.component';

declare var electron: any;  

@Component({
  selector: 'app-site-top-bar',
  templateUrl: './site-top-bar.component.html',
  styleUrls: ['./site-top-bar.component.css']
})
export class SiteTopBarComponent implements OnInit {

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
    this.dialogRef.open(OrNewTopicComponent, {
      width: '90vw'
    });
  }
  showArchieve(){
    this.dialogRef.open(ArchieveOrSiteComponent, {
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
