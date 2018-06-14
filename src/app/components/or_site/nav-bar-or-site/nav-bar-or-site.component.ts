import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

import {MatDialog} from '@angular/material';
import { ArchieveOrSiteComponent } from '../archieve-or-site/archieve-or-site.component';
@Component({
  selector: 'app-nav-bar-or-site',
  templateUrl: './nav-bar-or-site.component.html',
  styleUrls: ['./nav-bar-or-site.component.css']
})
export class NavBarOrSiteComponent implements OnInit {

  constructor(private auth: AuthService, private dialogRef: MatDialog) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }
  
  showArchieve(){
    this.dialogRef.open(ArchieveOrSiteComponent, {
      height: '90vh',
      width: '90vw',
    });
  }
}