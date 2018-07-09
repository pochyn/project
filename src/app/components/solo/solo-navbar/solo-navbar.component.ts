import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {SoloNewTopicComponent} from '../solo-new-topic/solo-new-topic.component';
import {MatDialog} from '@angular/material';
import { SoloArchieveComponent } from '../solo-archieve/solo-archieve.component';

@Component({
  selector: 'app-solo-navbar',
  templateUrl: './solo-navbar.component.html',
  styleUrls: ['./solo-navbar.component.css']
})
export class SoloNavbarComponent implements OnInit {

  constructor(private auth: AuthService, private dialogRef: MatDialog) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }
  
  //add Post
  addPost() {
    this.dialogRef.open(SoloNewTopicComponent, {
      height: '90vh',
      width: '90vw',
    });
  }
  showArchieve(){
    this.dialogRef.open(SoloArchieveComponent, {
      height: '90vh',
      width: '90vw',
    });
  }

}
