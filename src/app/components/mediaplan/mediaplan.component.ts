import { Component, OnInit, Inject, } from '@angular/core';
import { Router } from '@angular/router'
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatDatepicker, MAT_DIALOG_DATA} from '@angular/material';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {MatDialog} from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';

import * as moment from 'moment';

interface Post {
  author: string;
  name: string;
  date: string;
  title: string;
  branch: string;
  content: string;
  link: string;
  source: string;
  comments: string;
  checked: boolean;
  read: boolean;
  deadline: string;
  sourceDate: Date;
  submitDate: Date;
  gazeta_type: boolean;
  site_type: boolean;
  lviv_type: boolean;
  regions_type: boolean;
  archieved: boolean;
  archieved_g: boolean;
  archieved_kv: boolean;
  archieved_or: boolean;
  archieved_gr: boolean;
  delete_g: boolean;
  delete_kv: boolean;
  delete_or: boolean;
  delete_gr: boolean;
  checked_gazeta: boolean;
  checked_site: boolean;
  checked_lviv: boolean;
  checked_regions: boolean;
  date_modified: any;
  mediaplan_gazeta: boolean;
  mediaplan_lviv: boolean;
  mediaplan_site: boolean;
  mediaplan_regions: boolean;

}

interface PostId extends Post { 
  id: string; 
}

@Component({
  selector: 'app-mediaplan',
  templateUrl: './mediaplan.component.html',
  styleUrls: ['./mediaplan.component.css']
})
export class MediaplanComponent implements OnInit {

  postsCol: AngularFirestoreCollection<Post>;
  posts: any;
  regime: any;
  author: string;
  name: string;
  date: string;
  branch: string;
  content: string;
  link: string;
  source: string;
  comments: string;
  checked: boolean;
  read: boolean;
  deadline: string;
  sourceDate: Date;
  submitDate: Date;
  gazeta_type: boolean;
  site_type: boolean;
  lviv_type: boolean;
  regions_type: boolean;
  archieved_g: boolean;
  archieved_kv: boolean;
  archieved_or: boolean;
  archieved_gr: boolean;
  delete_g: boolean;
  delete_kv: boolean;
  delete_or: boolean;
  delete_gr: boolean;
  checked_gazeta: boolean;
  checked_site: boolean;
  checked_lviv: boolean;
  checked_regions: boolean;
  date_modified: any;
  by_gr: any;
  priority: any;
  ochna: any;
  mediaplan_gazeta: boolean;
  mediaplan_lviv: boolean;
  mediaplan_site: boolean;
  mediaplan_regions: boolean;


  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  selected_type: any;
  types = ['Загальний', 'Сайт', 'Львівський', 'Регіональний'];
  journ = [];
  users = {};
  new_id: any;
  selected: any;

  constructor(private afs: AngularFirestore, private auth: AuthService,
                private afauth: AngularFireAuth, private dialogRef: MatDialog) { }
  
  contentControl: FormControl = new FormControl('', [
      Validators.required
  ]);

  sourceControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  dateControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  typeControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
    let collRef = this.afs.collection('users').ref;
    let queryRef = collRef;
    queryRef.get().then((snapShot) => {
        for( let dock of snapShot.docs){
          //this.users.push({key: dock.data()['displayName'], 
          //                 value: dock.id});
          this.journ.push(dock.data()['displayName']);
          this.users[dock.data()['displayName']] = [dock.id, dock.data()['branch']];
        }
    });
    this.content = '';
    this.source = '';
    this.new_id = '';
    this.selected = '';
    this.selected_type = '';
    this.by_gr = false;
    this.priority = "▁";
    this.regime = '';
    this.deadline = '';
    this.link = '';
    this.checked = true;
    this.submitDate = undefined;
    this.comments = '';
    this.read = false;
    this.gazeta_type = false;
    this.site_type = false;
    this.lviv_type = false;
    this.regions_type = false;
    this.archieved_g = false;
    this.archieved_kv = false;
    this.archieved_or = false;
    this.archieved_gr = false;
    this.delete_g = false;
    this.delete_kv= false;
    this.delete_or= false;
    this.delete_gr= false;
    this.checked_gazeta=false;
    this.checked_site=false;
    this.checked_lviv = false;
    this.checked_regions=false;
    this.date_modified = '';
    this.ochna = false;
    this.mediaplan_gazeta = false;
    this.mediaplan_site = false;
    this.mediaplan_lviv = false;
    this.mediaplan_regions = false;
  }

  formatTodayDate() {
    var today = new Date();
    let dt = moment(today).locale('uk').format("LLL");
    return dt
  }
  formatSrcDate() {
    var src_dt;
    if (this.sourceDate != undefined){
      var dt = moment(this.sourceDate).locale('uk').format("LLL");
      src_dt = dt;
    } else {
      src_dt ='';
    }
    return src_dt
  }
  formatSbmDate() {
    var sbm_dt;
    if (this.submitDate != undefined){
      var dt = moment(this.submitDate).locale('uk').format("LLL");
      sbm_dt = dt;
    } else {
      sbm_dt ='';
    }
    return sbm_dt
  }


  addPost() {
    this.dialogRef.open(MediaplanComponent, {
      width: '90vw'
    });
  }

  newPost(){
    //get time
    if (this.selected_type == "Загальний") {
      this.mediaplan_gazeta = true;
    }
    if (this.selected_type == "Сайт") {
      this.mediaplan_site = true;
    }
    if (this.selected_type == "Львівський") {
      this.mediaplan_lviv = true;
    }
    if (this.selected_type == "Регіональний") {
      this.mediaplan_regions = true;
    }

    var dt = this.formatTodayDate();
    var sbm_dt = this.formatSbmDate();
    var src_dt = this.formatSrcDate();

    //get all needed info and setup new post
    let collRef = this.afs.collection('users').ref;
    let queryRef = collRef.where('email', '==', this.afauth.auth.currentUser.email);
    queryRef.get().then((snapShot) => {
        var br = snapShot.docs[0].data()['branch']
        var name = snapShot.docs[0].data()['displayName']
        this.selected = name;
        this.new_id = this.auth.currentUserId;
        this.afs.collection("/posts").add({ 
                        'content': this.content,
                        'author': this.new_id,
                        'by_gr': this.by_gr,
                        'priority': this.priority,
                        'date': dt,
                        'name': this.selected,
                        'link': this.link,
                        'read': this.read,
                        'source': this.source,
                        'sourceDate': src_dt,
                        'submitDate': sbm_dt,
                        'ochna': this.ochna,
                        'comments': this.comments,
                        'checked': this.checked,
                        'deadline': this.deadline,
                        'gazeta_type': this.gazeta_type,
                        'site_type': this.site_type,
                        'lviv_type': this.lviv_type,
                        'regions_type': this.regions_type,
                        'archieved_g':this.archieved_g = false,
                        'archieved_kv': this.archieved_kv,
                        'archieved_or': this.archieved_or,
                        'archieved_gr':this.archieved_gr,
                        'delete_g': this.delete_g,
                        'delete_kv': this.delete_kv,
                        'delete_or': this.delete_or,
                        'delete_gr': this.delete_gr,
                        'checked_gazeta': this.checked_gazeta,
                        'checked_site': this.checked_site,
                        'checked_lviv': this.checked_lviv,
                        'checked_regions': this.checked_regions,
                        'mediaplan_gazeta': this.mediaplan_gazeta,
                        'mediaplan_site': this.mediaplan_site,
                        'mediaplan_lviv': this.mediaplan_lviv,
                        'mediaplan_regions': this.mediaplan_regions,
                        'date_modified': this.date_modified,
                        'branch': br});
    })
    this.addPost();
  }
}