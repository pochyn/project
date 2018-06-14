import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
declare var electron: any;  
import {MatDialog} from '@angular/material';
import { ArchieveOrGazetaComponent } from '../archieve-or-gazeta/archieve-or-gazeta.component';
@Component({
  selector: 'app-or-top-bar',
  templateUrl: './or-top-bar.component.html',
  styleUrls: ['./or-top-bar.component.css']
})
export class OrTopBarComponent implements OnInit {

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
    this.dialogRef.open(ArchieveOrGazetaComponent, {
      height: '90vh',
      width: '90vw',
    });
  }
}
