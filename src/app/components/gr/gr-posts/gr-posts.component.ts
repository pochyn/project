import { Component, OnInit, ViewChild, ViewChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'
import { Location } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import {MatDialog} from '@angular/material';
import {MatTableModule} from '@angular/material';

import {GrShowTopicComponent} from '../gr-show-topic/gr-show-topic.component';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {MatRow} from '@angular/material';

import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';


import {Sort} from '@angular/material';

// post inteface
interface Post {
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
  selector: 'app-gr-posts',
  templateUrl: './gr-posts.component.html',
  styleUrls: ['./gr-posts.component.css']
})
export class GrPostsComponent implements OnInit {
 //to get data from database
 postsColGaz: AngularFirestoreCollection<Post>;
 postsColSite: AngularFirestoreCollection<Post>;
 postsColLviv: AngularFirestoreCollection<Post>;
 postsColRegions: AngularFirestoreCollection<Post>;
 postsColApp: AngularFirestoreCollection<Post>;
 postDoc: AngularFirestoreDocument<Post>;
 post: Observable<Post>;

 // needed to show post data
 content:string;
 author: string;

 //all posts of neede type
 posts: any;
 sites: any;
 lviv: any;
 regions: any;
 app: any;
 br: any;

 posts1: any;
 sites1: any;
 lviv1: any;
 posts2: any;
 sites2: any;
 lviv2: any;
 posts3: any;
 sites3: any;
 lviv3: any;
 postsColGaz1: AngularFirestoreCollection<Post>;
 postsColSite1: AngularFirestoreCollection<Post>;
 postsColLviv1: AngularFirestoreCollection<Post>;
 postsColGaz2: AngularFirestoreCollection<Post>;
 postsColSite2: AngularFirestoreCollection<Post>;
 postsColLviv2: AngularFirestoreCollection<Post>;
 postsColGaz3: AngularFirestoreCollection<Post>;
 postsColSite3: AngularFirestoreCollection<Post>;
 postsColLviv3: AngularFirestoreCollection<Post>;
 
 // what columns to diaplay
 displayedColumns = [ 'data.date', 'data.branch','data.name', 'data.content', 'data.priority', 'data.actions'];

 constructor(private afs: AngularFirestore, private auth: AuthService,
             private dialogRef: MatDialog, private afauth: AngularFireAuth) { }

  selected_types: any;
  types = ['Газета', 'Сайт', 'Львів', 'Регіони'];
  current_id: any;

  checked_for_gazeta = [];
  checked_for_site = [];
  checked_for_lviv = [];
  checked_for_regions = [];
  checked_for_read = [];
 
 // create observable data for posts or site
 postsData = new MatTableDataSource(this.posts);
 sitesData = new MatTableDataSource(this.sites);
 lvivData = new MatTableDataSource(this.lviv);
 regionsData = new MatTableDataSource(this.regions);
 appData = new MatTableDataSource(this.app);

 postsData1 = new MatTableDataSource(this.posts);
 sitesData1 = new MatTableDataSource(this.sites);
 lvivData1 = new MatTableDataSource(this.lviv);
 postsData2 = new MatTableDataSource(this.posts);
 sitesData2 = new MatTableDataSource(this.sites);
 lvivData2 = new MatTableDataSource(this.lviv);
 postsData3 = new MatTableDataSource(this.posts);
 sitesData3= new MatTableDataSource(this.sites);
 lvivData3 = new MatTableDataSource(this.lviv);

 @ViewChild('gazPaginator') gazPaginator: MatPaginator;
 @ViewChild('sitePaginator') sitePaginator: MatPaginator;
 @ViewChild('lvivPaginator') lvivPaginator: MatPaginator;
 @ViewChild('regionsPaginator') regionsPaginator: MatPaginator;
 @ViewChild('appPaginator') appPaginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;
 @ViewChild('table1') table1: MatSort;
 @ViewChild('table2') table2: MatSort;
 @ViewChild('table3') table3: MatSort;
 @ViewChild('table4') table4: MatSort;
 @ViewChildren('matrow') datarows: QueryList<MatRow>;

 

 ngOnInit() {
  var element = document.getElementById('ok');
  element.classList.add("hidden")

   // --------------------------
   // GAZETA
   // unread
   // --------------------------
   this.postsColGaz = this.afs.collection('posts');
   this.posts = this.postsColGaz.snapshotChanges()
     .map(actions => {
       return actions.map(a => {
         const data = a.payload.doc.data() as Post;
         const id = a.payload.doc.id;
         return { id, data };
       });
     }).map(posts => posts.filter(post => post.data.checked && post.data.gazeta_type && !post.data.read && !post.data.archieved_gr&& !(post.data.mediaplan_gazeta || post.data.mediaplan_lviv || post.data.mediaplan_regions || post.data.mediaplan_site)));
   //gazeta tab paginator
   this.posts.subscribe(newData => this.postsData.data = newData);
   this.postsData.paginator = this.gazPaginator;
   //sorting settings
   this.postsData.sortingDataAccessor = (item: any, property) => {
     switch(property) {
       case 'data.date': return item.data.date;
       case 'data.checked': return item.data.checked;
       case 'data.content': return item.data.content;
       case 'data.name': return item.data.name;
       default: return item[property];
     }
   };
   //filter settings
   this.postsData.sort = this.table1;
   this.postsData.filterPredicate = (item: any, filter: string)  => {
     const accumulator = (currentTerm, key) => {
       return key === 'data' ? currentTerm + item.data.content + item.data.name  : currentTerm + item[key];
     };
     const dataStr = Object.keys(item).reduce(accumulator, '').toLowerCase();
     // Transform the filter by converting it to lowercase and removing whitespace.
     const transformedFilter = filter.trim().toLowerCase();
     return dataStr.indexOf(transformedFilter) !== -1;
   };

   // -------------------------
   // approved
   // -------------------------
   this.postsColSite = this.afs.collection('posts');
   this.sites = this.postsColSite.snapshotChanges()
       .map(actions => {
         return actions.map(a => {
           const data = a.payload.doc.data() as Post;
           const id = a.payload.doc.id;
           return { id, data };
         });
       }).map(posts => posts.filter(post => post.data.checked && post.data.gazeta_type && post.data.checked_gazeta && !post.data.archieved_gr&& !(post.data.mediaplan_gazeta || post.data.mediaplan_lviv || post.data.mediaplan_regions || post.data.mediaplan_site)));       
   //site tab paginator
   this.sites.subscribe(data => this.sitesData.data = data);
   this.sitesData.paginator = this.sitePaginator;
   //sorting settings
   this.sitesData.sortingDataAccessor = (item: any, property) => {
     switch(property) {
       case 'data.date': return item.data.date;
       case 'data.checked': return item.data.checked;
       case 'data.content': return item.data.content;
       case 'data.name': return item.data.name;
       default: return item[property];
     }
   };
   //filter settings
   this.sitesData.sort = this.table2;
   this.sitesData.filterPredicate = (item: any, filter: string)  => {
     const accumulator = (currentTerm, key) => {
       return key === 'data' ? currentTerm + item.data.content + item.data.name  : currentTerm + item[key];
     };
     const dataStr = Object.keys(item).reduce(accumulator, '').toLowerCase();
     // Transform the filter by converting it to lowercase and removing whitespace.
     const transformedFilter = filter.trim().toLowerCase();
     return dataStr.indexOf(transformedFilter) !== -1;
   };

   // --------------------------
   // read
   // --------------------------
   this.postsColLviv = this.afs.collection('posts');
   this.lviv = this.postsColLviv.snapshotChanges()
     .map(actions => {
       return actions.map(a => {
         const data = a.payload.doc.data() as Post;
         const id = a.payload.doc.id;
         return { id, data };
       });
     }).map(posts => posts.filter(post =>  post.data.checked && post.data.gazeta_type && post.data.read && !post.data.checked_gazeta && !post.data.archieved_gr&& !(post.data.mediaplan_gazeta || post.data.mediaplan_lviv || post.data.mediaplan_regions || post.data.mediaplan_site)));
   //gazeta tab paginator
   this.lviv.subscribe(nData => this.lvivData.data = nData);
   this.lvivData.paginator = this.lvivPaginator;
   //sorting settings
   this.lvivData.sortingDataAccessor = (item: any, property) => {
     switch(property) {
       case 'data.date': return item.data.date;
       case 'data.checked': return item.data.checked;
       case 'data.content': return item.data.content;
       case 'data.name': return item.data.name;
       default: return item[property];
     }
   };
   //filter settings
   this.lvivData.sort = this.table3;
   this.lvivData.filterPredicate = (item: any, filter: string)  => {
     const accumulator = (currentTerm, key) => {
       return key === 'data' ? currentTerm + item.data.content + item.data.name  : currentTerm + item[key];
     };
     const dataStr = Object.keys(item).reduce(accumulator, '').toLowerCase();
     // Transform the filter by converting it to lowercase and removing whitespace.
     const transformedFilter = filter.trim().toLowerCase();
     return dataStr.indexOf(transformedFilter) !== -1;
   };
 }

 
 
 //apply filter for gazeta and site accordingly
 applyFilter(col: any, filterValue: string) {
   filterValue = filterValue.trim(); 
   filterValue = filterValue.toLowerCase(); 
   col.filter = filterValue;
 }
 //post id
 getPost(postId) {
   this.postDoc = this.afs.doc('posts/'+postId);
   this.post = this.postDoc.valueChanges();
 }
 
 //delete (not archive)
 deletePost(postId) {
   this.afs.doc('posts/'+postId).delete();
 }

 approve(postid){
  this.afs.doc('posts/'+postid).update({checked: true});
 }
 
 //open window to show current post
 showPost(postid, postdata){
   this.dialogRef.open(GrShowTopicComponent, {
    width: '90vw',
     data: {
       postId: postid,
       postdata: postdata,
     }
   });
 } 

 approve_gazeta(id){
  var element = document.getElementById('ok');
  var idd = id + '-1';
  var button = document.getElementById(idd);
  if (this.checked_for_gazeta.indexOf(id) > -1){
    var indx = this.checked_for_gazeta.indexOf(id);
    this.checked_for_gazeta.splice(indx, 1);
    button.classList.remove('approve');
    button.classList.add('default');
  } else {
    this.checked_for_gazeta.push(id);
    element.classList.remove("hidden")
    button.classList.remove('default');
    button.classList.add('approve');
  }
    if ((this.checked_for_gazeta.length <= 0) && (this.checked_for_lviv.length <= 0) && (this.checked_for_read.length <= 0) && (this.checked_for_regions.length <= 0) && (this.checked_for_site.length <= 0)){
      element.classList.add("hidden")
    }
}

approve_site(id){
  var element = document.getElementById('ok');
  var idd = id + '-2';
  var button = document.getElementById(idd);
  if (this.checked_for_site.indexOf(id) > -1){
    var indx = this.checked_for_site.indexOf(id);
    this.checked_for_site.splice(indx, 1);
    button.classList.remove('approve');
    button.classList.add('default');
  } else {
    this.checked_for_site.push(id);
    element.classList.remove("hidden")
    button.classList.remove('default');
    button.classList.add('approve');
  }
    if ((this.checked_for_gazeta.length <= 0) && (this.checked_for_lviv.length <= 0) && (this.checked_for_read.length <= 0) && (this.checked_for_regions.length <= 0) && (this.checked_for_site.length <= 0)){
      element.classList.add("hidden")
    }
}

approve_regions(id){
  var element = document.getElementById('ok');
  var idd = id + '-4';
  var button = document.getElementById(idd);
  if (this.checked_for_regions.indexOf(id) > -1){
    var indx = this.checked_for_regions.indexOf(id);
    this.checked_for_regions.splice(indx, 1);
    button.classList.remove('approve');
    button.classList.add('default');
  } else {
    this.checked_for_regions.push(id);
    element.classList.remove("hidden")
    button.classList.remove('default');
    button.classList.add('approve');
  }
    if ((this.checked_for_gazeta.length <= 0) && (this.checked_for_lviv.length <= 0) && (this.checked_for_read.length <= 0) && (this.checked_for_regions.length <= 0) && (this.checked_for_site.length <= 0)){
      element.classList.add("hidden")
    }
}

approve_lviv(id){
  var element = document.getElementById('ok');
  var idd = id + '-3';
  var button = document.getElementById(idd);
  if (this.checked_for_lviv.indexOf(id) > -1){
    var indx = this.checked_for_lviv.indexOf(id);
    this.checked_for_lviv.splice(indx, 1);
    button.classList.remove('approve');
    button.classList.add('default');
  } else {
    this.checked_for_lviv.push(id);
    element.classList.remove("hidden")
    button.classList.remove('default');
    button.classList.add('approve');
  }
    if ((this.checked_for_gazeta.length <= 0) && (this.checked_for_lviv.length <= 0) && (this.checked_for_read.length <= 0) && (this.checked_for_regions.length <= 0) && (this.checked_for_site.length <= 0)){
      element.classList.add("hidden")
    }
}

approve_read(id){
  var element = document.getElementById('ok');
  var idd = id + '-5';
  var button = document.getElementById(idd);
  if (this.checked_for_read.indexOf(id) > -1){
    var indx = this.checked_for_read.indexOf(id);
    this.checked_for_read.splice(indx, 1);
    button.classList.remove('read1');
    button.classList.add('default');
  } else {
    this.checked_for_read.push(id);
    element.classList.remove("hidden")
    button.classList.remove('default');
    button.classList.add('read1');
  }
    if ((this.checked_for_gazeta.length <= 0) && (this.checked_for_lviv.length <= 0) && (this.checked_for_read.length <= 0) && (this.checked_for_regions.length <= 0) && (this.checked_for_site.length <= 0)){
      element.classList.add("hidden")
    }
}


ok() {
  var i;
  for (i = 0; i < this.checked_for_gazeta.length; i++) { 
    this.afs.doc('posts/'+this.checked_for_gazeta[i]).update({read: true});
    this.afs.doc('posts/'+this.checked_for_gazeta[i]).update({checked_gazeta: true});
    this.afs.doc('posts/'+this.checked_for_gazeta[i]).update({gazeta_type: true});
  }

  for (i = 0; i < this.checked_for_lviv.length; i++) { 
    this.afs.doc('posts/'+this.checked_for_lviv[i]).update({read: true});
    this.afs.doc('posts/'+this.checked_for_lviv[i]).update({checked_lviv: true});
    this.afs.doc('posts/'+this.checked_for_lviv[i]).update({lviv_type: true});
  }

  for (i = 0; i < this.checked_for_regions.length; i++) { 
    this.afs.doc('posts/'+this.checked_for_regions[i]).update({read: true});
    this.afs.doc('posts/'+this.checked_for_regions[i]).update({checked_regions: true});
    this.afs.doc('posts/'+this.checked_for_lviv[i]).update({regions_type: true});
  }

  for (i = 0; i < this.checked_for_site.length; i++) { 
    this.afs.doc('posts/'+this.checked_for_site[i]).update({read: true});
    this.afs.doc('posts/'+this.checked_for_site[i]).update({checked_site: true});
    this.afs.doc('posts/'+this.checked_for_lviv[i]).update({site_type: true});
  }

  for (i = 0; i < this.checked_for_read.length; i++) { 
    this.afs.doc('posts/'+this.checked_for_read[i]).update({read: true});
  }


  this.selected_types = []
  this.current_id = undefined;
  var element = document.getElementById('ok');
  element.classList.add("hidden")
}

 test(id){
  this.selected_types = []
  var element = document.getElementById('ok');
  element.classList.remove("hidden")
  this.current_id = id;
 }


}