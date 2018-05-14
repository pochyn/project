import { Component, OnInit, ViewChild, ViewChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FormControl, Validators } from '@angular/forms';

import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import {MatDialog} from '@angular/material';
import {MatTableModule} from '@angular/material';

import {NewTopicComponent} from '../new-topic/new-topic.component';
import {ShowTopicComponent} from '../show-topic/show-topic.component';

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
  date_modified: any;
}
interface PostId extends Post { 
  id: string; 
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  //to get data from database
  postsColGaz: AngularFirestoreCollection<Post>;
  postsColSite: AngularFirestoreCollection<Post>;
  postsColLviv: AngularFirestoreCollection<Post>;
  postsColRegions: AngularFirestoreCollection<Post>;
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
  
  // what columns to diaplay
  displayedColumns = ['data.checked', 'data.date', 'data.content', 'data.actions'];

  constructor(private afs: AngularFirestore, private auth: AuthService,
              private dialogRef: MatDialog, private afauth: AngularFireAuth) { }
  
  // create observable data for posts or site
  postsData = new MatTableDataSource(this.posts);
  sitesData = new MatTableDataSource(this.sites);
  lvivData = new MatTableDataSource(this.lviv);
  regionsData = new MatTableDataSource(this.regions);

  @ViewChild('gazPaginator') gazPaginator: MatPaginator;
  @ViewChild('sitePaginator') sitePaginator: MatPaginator;
  @ViewChild('lvivPaginator') lvivPaginator: MatPaginator;
  @ViewChild('regionsPaginator') regionsPaginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChildren('matrow') datarows: QueryList<MatRow>;

  

  ngOnInit() {

    // --------------------------
    //get data for posts on gazeta
    // --------------------------
    this.postsColGaz = this.afs.collection('posts');
    this.posts = this.postsColGaz.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      }).map(posts => posts.filter(post => post.data.author == this.auth.currentUserId
                                    && post.data.gazeta_type && !post.data.archieved_g));
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
    this.postsData.sort = this.sort;
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
    this.postsColSite = this.afs.collection('posts');
    this.sites = this.postsColSite.snapshotChanges()
        .map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Post;
            const id = a.payload.doc.id;
            return { id, data };
          });
        }).map(posts => posts.filter(post => post.data.author == this.auth.currentUserId
                                      && post.data.site_type && !post.data.archieved_g));       
    //site tab paginator
    this.sites.subscribe(data => this.sitesData.data = data);
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
    this.sitesData.sort = this.sort;
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
    //get data for posts on lviv
    // --------------------------
    this.postsColLviv = this.afs.collection('posts');
    this.lviv = this.postsColLviv.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      }).map(posts => posts.filter(post => post.data.author == this.auth.currentUserId
                                    && post.data.lviv_type && !post.data.archieved_g));
    //gazeta tab paginator
    this.lviv.subscribe(nData => this.lvivData.data = nData);
    this.lvivData.paginator = this.lvivPaginator;
    //sorting settings
    this.lvivData.sortingDataAccessor = (item: any, property) => {
      switch(property) {
        case 'data.date': return item.data.date;
        case 'data.checked': return item.data.checked;
        case 'data.content': return item.data.content;
        default: return item[property];
      }
    };
    //filter settings
    this.lvivData.sort = this.sort;
    this.lvivData.filterPredicate = (item: any, filter: string)  => {
      const accumulator = (currentTerm, key) => {
        return key === 'data' ? currentTerm + item.data.content + item.data.name  : currentTerm + item[key];
      };
      const dataStr = Object.keys(item).reduce(accumulator, '').toLowerCase();
      // Transform the filter by converting it to lowercase and removing whitespace.
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    };

    // --------------------------
    //get data for posts on regions
    // --------------------------
    this.postsColRegions = this.afs.collection('posts');
    this.regions = this.postsColRegions.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      }).map(posts => posts.filter(post => post.data.author == this.auth.currentUserId
                                    && post.data.regions_type && !post.data.archieved_g));
    //gazeta tab paginator
    this.regions.subscribe(nwData => this.regionsData.data = nwData);
    this.regionsData.paginator = this.regionsPaginator;
    //sorting settings
    this.regionsData.sortingDataAccessor = (item: any, property) => {
      switch(property) {
        case 'data.date': return item.data.date;
        case 'data.checked': return item.data.checked;
        case 'data.content': return item.data.content;
        default: return item[property];
      }
    };
    //filter settings
    this.regionsData.sort = this.sort;
    this.regionsData.filterPredicate = (item: any, filter: string)  => {
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
    this.afs.doc('posts/'+postid).update({read: true});
    this.dialogRef.open(ShowTopicComponent, {
      height: '800px',
      width: '1000px',
      data: {
        postId: postid,
        postdata: postdata,
      }
    });
  }
}