import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {KvNewTopicComponent} from '../kv-new-topic/kv-new-topic.component';
import {MatDialog} from '@angular/material';
import {KvArchieveComponent } from '../kv-archieve/kv-archieve.component';

@Component({
  selector: 'app-kv-nav-bar',
  templateUrl: './kv-nav-bar.component.html',
  styleUrls: ['./kv-nav-bar.component.css']
})
export class KvNavBarComponent implements OnInit {

  constructor(private auth: AuthService, private dialogRef: MatDialog) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }
  
  //add Post
  addPost() {
    this.dialogRef.open(KvNewTopicComponent, {
      height: '90vh',
      width: '90vw',
    });
  }
  showArchieve(){
    this.dialogRef.open(KvArchieveComponent, {
      height: '90vh',
      width: '90vw',
    });
  }

}
