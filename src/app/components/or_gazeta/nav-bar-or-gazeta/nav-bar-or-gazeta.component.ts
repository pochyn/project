import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

import {MatDialog} from '@angular/material';
import { ArchieveOrGazetaComponent } from '../archieve-or-gazeta/archieve-or-gazeta.component';

@Component({
  selector: 'app-nav-bar-or-gazeta',
  templateUrl: './nav-bar-or-gazeta.component.html',
  styleUrls: ['./nav-bar-or-gazeta.component.css']
})
export class NavBarOrGazetaComponent implements OnInit {

  constructor(private auth: AuthService, private dialogRef: MatDialog) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }
  
  showArchieve(){
    this.dialogRef.open(ArchieveOrGazetaComponent, {
      height: '90vh',
      width: '90vw',
    });
  }
}
