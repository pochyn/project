import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {GrNewTopicComponent} from '../gr-new-topic/gr-new-topic.component';
import {MatDialog} from '@angular/material';
import {GrArchieveComponent } from '../gr-archieve/gr-archieve.component';
@Component({
  selector: 'app-gr-nav-bar',
  templateUrl: './gr-nav-bar.component.html',
  styleUrls: ['./gr-nav-bar.component.css']
})
export class GrNavBarComponent implements OnInit {

  constructor(private auth: AuthService, private dialogRef: MatDialog) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }
  
  //add Post
  addPost() {
    this.dialogRef.open(GrNewTopicComponent, {
      height: '90vh',
      width: '90vw',
    });
  }
  showArchieve(){
    this.dialogRef.open(GrArchieveComponent, {
      height: '90vh',
      width: '90vw',
    });
  }

}