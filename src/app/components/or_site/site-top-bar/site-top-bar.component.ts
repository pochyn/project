import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
declare var electron: any;  
import {MatDialog} from '@angular/material';
import { ArchieveOrSiteComponent } from '../archieve-or-site/archieve-or-site.component';

@Component({
  selector: 'app-site-top-bar',
  templateUrl: './site-top-bar.component.html',
  styleUrls: ['./site-top-bar.component.css']
})
export class SiteTopBarComponent implements OnInit {

  constructor(private auth: AuthService, private dialogRef: MatDialog) { }

  ngOnInit() {
  }
  logout() {
    this.auth.logout();
  }
  close(){
    electron.ipcRenderer.send('close');
  }

  minimize(){
    electron.ipcRenderer.send('minimize');
  }
  showArchieve(){
    this.dialogRef.open(ArchieveOrSiteComponent, {
      height: '90vh',
      width: '90vw',
    });
  }
}
