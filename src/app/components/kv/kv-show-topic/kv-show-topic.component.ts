import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatDatepicker, MatTableDataSource } from '@angular/material';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
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

  postsColGaz: AngularFirestoreCollection<Post>;

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
  post: any;
  id: any;
  posts: any;

  postsData = new MatTableDataSource(this.posts);


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private afs: AngularFirestore,
                private dialogRef: MatDialog) { }

  selected_types: any;
  deadln: any;
  comm: any;
  users = {};
  types = ['Газета', 'Сайт', 'Львів', 'Регіони'];
  hours = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];
  selected: any;
  selected_hour: any;
  journ = [];
  public local = [];

  typeControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
    this.post = this.data['postdata'];
    this.id = this.data['postId'];

    var element1 = document.getElementById("1");
    if (this.post['checked']){
      element1.classList.toggle("approve");
    } else {
      element1.classList.toggle("rej");
    }
  }
  
  getData(){
    let collRef1 = this.afs.collection('posts').ref;
    let queryRef1 = collRef1;
    queryRef1.get().then((snapShot) => {
        for( let dock of snapShot.docs){
          //this.users.push({key: dock.data()['displayName'], 
          //                 value: dock.id});
          if (dock.id == this.data['postId']){
            this.post = dock.data();
          }
        }
    });
  }

  archieve(postid){
    this.afs.doc('posts/'+postid).update({archieved_kv: true});
    this.getData();
  }

  formatTodayDate() {
    var today = new Date();
    let dt = moment(today).format("h:mm, DD/MM/YY");
    return dt
  }

  formatDlnDate() {
    var sbm_dt;
    if (this.deadln != undefined){
      if (this.selected_hour != undefined){
        var arr = this.selected_hour.split(':')
        this.deadln.setHours(arr[0])
        this.deadln.setMinutes(arr[1])
      }
      var dt = moment(this.deadln).format("h:mm, DD/MM/YY");
      sbm_dt = dt;
    } else {
      if (this.post["deadline"] == ''){
        sbm_dt ='';
      } else {
        sbm_dt = this.post["deadline"];
      }
    }
    return sbm_dt
  }  

  approve(postid, check){
    if (check) {
      var element11 = document.getElementById("1");
      this.afs.doc('posts/'+postid).update({checked: false});
      element11.classList.remove("approve");
      element11.classList.add("rej");
    } 
    if (!check){
      var element12 = document.getElementById("1");
      this.afs.doc('posts/'+postid).update({checked: true});
      element12.classList.remove("rej");
      element12.classList.add("approve");
    }
    this.getData();
  }

  changePost(postid, data){

    if (this.comm != undefined &&  this.comm != ''){
      this.afs.doc('posts/'+postid).update({comments: this.post['comments'] + " (КЕРІВНИК ВІДДІЛУ): " +this.comm});
      var modified_dt = this.formatTodayDate();
      this.afs.doc('posts/'+postid).update({date_modified: modified_dt});
    }
    this.getData();
  }

  
}