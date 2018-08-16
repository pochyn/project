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
  priority: any;

}
@Component({
  selector: 'app-all-show-media',
  templateUrl: './all-show-media.component.html',
  styleUrls: ['./all-show-media.component.css']
})
export class AllShowMediaComponent implements OnInit {

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
  priority: any;
  mediaplan_gazeta: boolean;
  mediaplan_lviv: boolean;
  mediaplan_site: boolean;
  mediaplan_regions: boolean;

  postDoc: AngularFirestoreDocument<Post>;
  post: any;
  id: any;
  posts: any;

  postsData = new MatTableDataSource(this.posts);


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private afs: AngularFirestore,
    private afauth: AngularFireAuth, private dialogRef: MatDialog) { }

    selected_types: any;
    deadln: any;
    comm: any;
    users = {};
    types = ['Загальні', 'Сайт', 'Львівські', 'Регіональні'];
    priorities = ['▁', '▄', '█'];
    hours = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];
    selected: any;
    selected_hour: any;
    journ = [];
    public local = [];
    priority_selected: any;
    mediaplan_type: any;

    typeControl: FormControl = new FormControl('', [
      Validators.required
    ]);

  ngOnInit() {

    this.post = this.data['postdata'];
    this.id = this.data['postId'];
    this.priority_selected = ''

    if (this.post.mediaplan_gazeta){
      this.mediaplan_type = "Загальний"
    }
    if (this.post.mediaplan_lviv){
      this.mediaplan_type = "Львівський"
    }
    if (this.post.mediaplan_regions){
      this.mediaplan_type = "Регіональний"
    }
    if (this.post.mediaplan_site){
      this.mediaplan_type = "Сайт"
    }
  
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
  }




  archieve(postid){
    let collRef = this.afs.collection('users').ref;
    let queryRef = collRef.where('email', '==', this.afauth.auth.currentUser.email);
    queryRef.get().then((snapShot) => {
        var posada = snapShot.docs[0].data()['posada']
        if (posada == 'Журналіст' ) {
          this.afs.doc('posts/'+postid).update({archieved_g: true});
        }
        if (posada == 'Керівник відділу' ) {
          this.afs.doc('posts/'+postid).update({archieved_kv: true});
        }
        if (posada == 'Оперативний редактор' ) {
          this.afs.doc('posts/'+postid).update({archieved_or: true});
        } 
        if (posada == 'Самостійний' ) {
          this.afs.doc('posts/'+postid).update({archieved_g: true});
        }        
      })
  }

  formatTodayDate() {
    var today = new Date();
    let dt = moment(today).locale('uk').format("LLL");
    return dt
  }

  formatDlnDate() {
    var sbm_dt;
    if (this.deadln != undefined){
      if (this.selected_hour != undefined){
        var arr = this.selected_hour.split(':')
        this.deadln.setHours(arr[0])
        this.deadln.setMinutes(arr[1])
      } else {
        this.deadln.setHours(12)
        this.deadln.setMinutes(0)
      }
      var dt = moment(this.deadln).locale('uk').format("LLL");
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
    
  showPost(postid, postdata){
    this.dialogRef.open(AllShowMediaComponent, {
      height: '90vh',
      data: {
        postId: postid,
        postdata: postdata
      }
    });
  }

  
}