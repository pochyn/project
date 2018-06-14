import { Component, OnInit, ViewChild, ViewChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'
import { Location } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { FormControl, Validators } from '@angular/forms';

import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import {MatDialog} from '@angular/material';
import {MatTableModule} from '@angular/material';

import {ShowTopicOrGazetaComponent} from '../show-topic-or-gazeta/show-topic-or-gazeta.component';

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
}
interface PostId extends Post { 
  id: string; 
}

@Component({
  selector: 'app-post-or-gazeta',
  templateUrl: './post-or-gazeta.component.html',
  styleUrls: ['./post-or-gazeta.component.css']
})
export class PostOrGazetaComponent implements OnInit {

  //to get data from database
  postsColApp: AngularFirestoreCollection<Post>;
  postsColRej: AngularFirestoreCollection<Post>;
  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  // needed to show post data
  content:string;
  author: string;

  //all posts of neede type
  posts: any;
  rej: any;

  
  // what columns to diaplay
  displayedColumns = ['data.checked', 'data.date', 'data.content', 'data.actions', 'data.comments'];

  constructor(private afs: AngularFirestore, private auth: AuthService,
              private dialogRef: MatDialog, private afauth: AngularFireAuth) { }
  
  // create observable data for posts or site
  postsData = new MatTableDataSource(this.posts);
  sitesData = new MatTableDataSource(this.rej);

  @ViewChild('gazPaginator') gazPaginator: MatPaginator;
  @ViewChild('sitePaginator') sitePaginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('table1') table1: MatSort;
  @ViewChild('table2') table2: MatSort;
  @ViewChildren('matrow') datarows: QueryList<MatRow>;

  

  ngOnInit() {

    // --------------------------
    //get data for posts aprrobed
    // --------------------------
    this.postsColApp = this.afs.collection('posts');
    this.posts = this.postsColApp.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      }).map(posts => posts.filter(post => post.data.gazeta_type && post.data.checked_gazeta  &&
                         post.data.gazeta_type && !post.data.archieved_or));
    //gazeta tab paginator
    this.posts.subscribe(newData => this.postsData.data = newData);
    this.postsData.paginator = this.gazPaginator;
    //sorting settings
    this.postsData.sortingDataAccessor = (item: any, property) => {
      switch(property) {
        case 'data.date': return item.data.date;
        case 'data.checked': return item.data.checked;
        case 'data.content': return item.data.content;
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
    // get data for posts on site
    // -------------------------
    this.postsColRej = this.afs.collection('posts');
    this.rej = this.postsColRej.snapshotChanges()
        .map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Post;
            const id = a.payload.doc.id;
            return { id, data };
          });
        }).map(posts => posts.filter(post => post.data.read && !post.data.checked_gazeta
                                      && post.data.gazeta_type && !post.data.archieved_or));       
    //site tab paginator
    this.rej.subscribe(data => this.sitesData.data = data);
    this.sitesData.paginator = this.sitePaginator;
    //sorting settings
    this.sitesData.sortingDataAccessor = (item: any, property) => {
      switch(property) {
        case 'data.date': return item.data.date;
        case 'data.checked': return item.data.checked;
        case 'data.content': return item.data.content;
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
    this.dialogRef.open(ShowTopicOrGazetaComponent, {
      height: '90vh',
      width: '90vw',
      data: {
        postId: postid,
        postdata: postdata,
      }
    });
  }
}