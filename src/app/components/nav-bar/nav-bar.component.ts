import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {NewTopicComponent} from '../new-topic/new-topic.component';
import {MatDialog} from '@angular/material';
import { ArchieveComponent } from '../archieve/archieve.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private auth: AuthService, private dialogRef: MatDialog) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }
  
  //add Post
  addPost() {
    this.dialogRef.open(NewTopicComponent, {
      height: '90vh',
      width: '90vw',
    });
  }
  showArchieve(){
    this.dialogRef.open(ArchieveComponent, {
      height: '90vh',
      width: '90vw',
    });
  }

}
