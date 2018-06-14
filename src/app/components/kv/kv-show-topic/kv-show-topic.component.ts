import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { FormControl, Validators } from '@angular/forms';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
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
@Component({
  selector: 'app-kv-show-topic',
  templateUrl: './kv-show-topic.component.html',
  styleUrls: ['./kv-show-topic.component.css']
})
export class KvShowTopicComponent implements OnInit {

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
  id: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private afs: AngularFirestore,
                private dialogRef: MatDialog) { }

  selected_types: any;
  types = ['Газета', 'Сайт', 'Львів', 'Регіони'];

  typeControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
    this.post = this.data['postdata'];
    this.id = this.data['postId'];
  }

  showData(){
    
  }

  getTypes(arr){
    if(arr.indexOf("Газета") > -1){
      this.gazeta_type = true;
    } else {
      this.gazeta_type = false;
    }
    if(arr.indexOf("Сайт") > -1){
      this.site_type = true;
    } else {
      this.site_type = false;
    }
    if(arr.indexOf("Львів") > -1){
      this.lviv_type = true;
    } else {
      this.lviv_type = false;
    }
    if(arr.indexOf("Регіони") > -1){
      this.regions_type = true;
    } else {
      this.regions_type = false;
    }
  }
  getPost(postId) {
    this.postDoc = this.afs.doc('posts/'+postId);
    this.post = this.postDoc.valueChanges();
  }

  changePost(postid){
    this.getTypes(this.selected_types);
    this.afs.doc('posts/'+postid).update({gazeta_type: this.gazeta_type});
    this.afs.doc('posts/'+postid).update({site_type: this.site_type});
    this.afs.doc('posts/'+postid).update({lviv_type: this.lviv_type});
    this.afs.doc('posts/'+postid).update({regions_type: this.regions_type});
  }

  archieve(postid){
    this.afs.doc('posts/'+postid).update({archieved_kv: true});
  }

  showPost(postid, postdata){
    this.dialogRef.open(KvShowTopicComponent, {
      height: '90vh',
      width: '90vw',
      data: {
        postId: postid,
        postdata: postdata
      }
    });
  }
}
