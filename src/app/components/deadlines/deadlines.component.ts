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

import * as moment from 'moment';

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
  sourceDate: string;
  submitDate: string;
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
  selector: 'app-deadlines',
  templateUrl: './deadlines.component.html',
  styleUrls: ['./deadlines.component.css']
})
export class DeadlinesComponent implements OnInit {

  //to get data from database
  postsCol: AngularFirestoreCollection<Post>;
  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  // needed to show post data
  content:string;
  author: string;

  //all posts of neede type
  posts: any;

  
  // what columns to diaplay
  displayedColumns = ['data.date_modified', 'data.deadline'];

  constructor(private afs: AngularFirestore, private auth: AuthService,
    private dialogRef: MatDialog, private afauth: AngularFireAuth) { }

  // create observable data for posts or site
  postsData = new MatTableDataSource(this.posts);

  @ViewChild('postsPaginator') postsPaginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
        //get time
        var today = new Date();
        let dt = moment(today).locale('uk').format("LLL");
    // --------------------------
    //get data for posts on gazeta
    // --------------------------
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      }).map(posts => posts.filter(post => post.data.author == this.auth.currentUserId
                                    && post.data.deadline != '' && post.data.deadline > dt && !post.data.archieved_g));
    //gazeta tab paginator
    this.posts.subscribe(newData => this.postsData.data = newData);
    this.postsData.paginator = this.postsPaginator;
    //sorting settings
    this.postsData.sortingDataAccessor = (item: any, property) => {
      switch(property) {
        case 'data.date_modified': return item.data.date_modified;
        case 'data.checked': return item.data.checked;
        case 'data.deadline': return item.data.deadline;
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

  }

  showPost(postid, postdata){
    this.dialogRef.open(ShowTopicComponent, {
      width: '90vw',
      data: {
        postId: postid,
        postdata: postdata,
      }
    });
  }

}
