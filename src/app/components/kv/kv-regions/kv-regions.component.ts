import { Component, OnInit, ViewChild, ViewChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'
import { Location } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import {MatDialog} from '@angular/material';
import {MatTableModule} from '@angular/material';

import { KvShowTopicComponent } from '../kv-show-topic/kv-show-topic.component';

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
  read_kv: any;
}
interface PostId extends Post { 
  id: string; 
}

@Component({
  selector: 'app-kv-regions',
  templateUrl: './kv-regions.component.html',
  styleUrls: ['./kv-regions.component.css']
})
export class KvRegionsComponent implements OnInit {

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
  var br;
  let collRef = this.afs.collection('users').ref;
  let queryRef = collRef.where('email', '==', this.afauth.auth.currentUser.email);
  queryRef.get().then((snapShot) => {
      br = snapShot.docs[0].data()['branch']
      this.postsColSite = this.afs.collection('posts');
      this.sites = this.postsColSite.snapshotChanges()
          .map(actions => {
            return actions.map(a => {
              const data = a.payload.doc.data() as Post;
              const id = a.payload.doc.id;
              return { id, data };
            });
          }).map(posts => posts.filter(post => post.data.branch == br && post.data.regions_type && post.data.checked_regions && !post.data.archieved_kv));       
      //site tab paginator
      console.log(br)
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
      }

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
     }).map(posts => posts.filter(post => post.data.branch == br && post.data.regions_type && !post.data.read_kv && !post.data.archieved_kv));
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
     }).map(posts => posts.filter(post => post.data.branch == br && post.data.regions_type && post.data.read_kv && !post.data.checked_regions && !post.data.archieved_kv));
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
    
    
    });
  
   
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
 
 //open window to show current post
 showPost(postid, postdata){
  this.afs.doc('posts/'+postid).update({read_kv: true});
   this.dialogRef.open(KvShowTopicComponent, {
    width: '90vw',
     data: {
       postId: postid,
       postdata: postdata,
     }
   });
 } 
}