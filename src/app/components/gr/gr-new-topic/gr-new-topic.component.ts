import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Location } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatDatepicker } from '@angular/material';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {MatDialog} from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';

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

}

interface PostId extends Post { 
  id: string; 
}

@Component({
  selector: 'app-gr-new-topic',
  templateUrl: './gr-new-topic.component.html',
  styleUrls: ['./gr-new-topic.component.css']
})
export class GrNewTopicComponent implements OnInit {


  postsCol: AngularFirestoreCollection<Post>;
  posts: any;

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


  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  selected_types: any;
  types = ['Газета', 'Сайт', 'Львів', 'Регіони'];

  constructor(private afs: AngularFirestore, private auth: AuthService,
                private afauth: AngularFireAuth) { }
  
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
    this.deadline = '';
    this.link = '';
    this.submitDate = undefined;
    this.comments = '';
    this.read = false;
    this.gazeta_type = false;
    this.site_type = false;
    this.lviv_type = false;
    this.regions_type = false;
    this.archieved_g = false;
    this.archieved_kv= false;
    this.archieved_or= false;
    this.archieved_gr= false;
    this.delete_g= false;
    this.delete_kv= false;
    this.delete_or= false;
    this.delete_gr= false;
    this.checked_gazeta=false;
    this.checked_site=false;
    this.checked_lviv = false;
    this.checked_regions=false;
    this.date_modified = '';
  }
  

  formatDate(date) {
    var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Spt", "Nov",
      "Oct", "Dec"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    var hour = date.getHours();
    var min = date.getMinutes();

    return hour + ':' + min + ' ' + '-' + day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  getTypes(arr){
    if(arr.indexOf("Газета") > -1){
      this.gazeta_type = true;
    }
    if(arr.indexOf("Сайт") > -1){
      this.site_type = true;
    }
    if(arr.indexOf("Львів") > -1){
      this.lviv_type = true;
    }
    if(arr.indexOf("Регіони") > -1){
      this.regions_type = true;
    }
  }

  newPost(){
    this.getTypes(this.selected_types);

    //get time
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    today.setHours(hour);
    today.setMinutes(min);
    var options = {  
      year: "numeric", month: "numeric",  
      day: "numeric", hour: "2-digit", minute: "2-digit"  
    };  
    var dt = today.toLocaleTimeString("en-us", options);
    if (this.submitDate != undefined){
      var sbm_dt = this.submitDate.toLocaleTimeString("en-us", options);
    } else {
      var sbm_dt ='';
    }
    var src_dt = this.sourceDate.toLocaleTimeString("en-us", options);
    
    //get all needed info and setup new post
    let collRef = this.afs.collection('users').ref;
    let queryRef = collRef.where('email', '==', this.afauth.auth.currentUser.email);
    queryRef.get().then((snapShot) => {
        var br = snapShot.docs[0].data()['branch']
        var name = snapShot.docs[0].data()['displayName']

        this.afs.collection('posts').add({ 
                        'content': this.content,
                        'author': this.auth.currentUserId,
                        'date': dt,
                        'name': name,
                        'link': this.link,
                        'read': this.read,
                        'source': this.source,
                        'sourceDate': src_dt,
                        'submitDate': sbm_dt,
                        'comments': this.comments,
                        'checked': false,
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
                        'date_modified': this.date_modified,
                        'branch': br});
    })
  }
}