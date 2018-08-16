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
  selector: 'app-show-media',
  templateUrl: './show-media.component.html',
  styleUrls: ['./show-media.component.css']
})
export class ShowMediaComponent implements OnInit {

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
                private dialogRef: MatDialog) { }

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
    this.getClass();
  }
  getClass(){
    var element1 = document.getElementById("1");
    if (this.post['checked_gazeta'] || this.post['checked_lviv'] || this.post['checked_site'] || this.post['checked_regions']){
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
    var element5 = (<HTMLInputElement>document.getElementById("5"));
    element5.value = '';
  }

  getTypes(arr){

      if(this.selected_types == 'Загальні'){
        this.gazeta_type = true;
        this.mediaplan_gazeta = true;
        this.checked_gazeta = this.post['checked_gazeta']
      } else {
        this.gazeta_type = false;
        this.mediaplan_gazeta = false;
        this.checked_gazeta = false;
      }
      if(this.selected_types == 'Сайт'){
        this.site_type = true;
        this.mediaplan_site = true;
        this.checked_site = this.post['checked_site']
      } else {
        this.site_type = false;
        this.mediaplan_site = false;
        this.checked_site = false;
      }
      if(this.selected_types == 'Львівські'){
        this.lviv_type = true;
        this.mediaplan_lviv = true;
        this.checked_lviv = this.post['checked_lviv']
      } else {
        this.lviv_type = false;
        this.mediaplan_lviv = false;
        this.checked_lviv = false;
      }
      if(this.selected_types == 'Регіональні'){
        this.regions_type = true;
        this.mediaplan_regions = true;
        this.checked_regions = this.post['checked_regions']
      } else {
        this.regions_type = false;
        this.mediaplan_regions = false;
        this.checked_regions = false;
      }
  }

  changePost(postid, data){
    var sbm_dt = this.formatDlnDate();
    this.afs.doc('posts/'+postid).update({deadline: sbm_dt});

    if (this.priority_selected != ''){
      this.priority = this.priority_selected;
      this.afs.doc('posts/'+postid).update({priority: this.priority});
    }

    if (this.selected_types != undefined && this.selected_types != ''){
      this.getTypes(this.selected_types);
      this.afs.doc('posts/'+postid).update({gazeta_type: this.gazeta_type});
      this.afs.doc('posts/'+postid).update({site_type: this.site_type});
      this.afs.doc('posts/'+postid).update({lviv_type: this.lviv_type});
      this.afs.doc('posts/'+postid).update({regions_type: this.regions_type});
      this.afs.doc('posts/'+postid).update({mediaplan_gazeta: this.mediaplan_gazeta});
      this.afs.doc('posts/'+postid).update({mediaplan_lviv: this.mediaplan_lviv});
      this.afs.doc('posts/'+postid).update({mediaplan_site: this.mediaplan_site});
      this.afs.doc('posts/'+postid).update({mediaplan_regions: this.mediaplan_regions});
    }

    if (this.selected != undefined &&  this.selected != ''){
      this.afs.doc('posts/'+postid).update({author: this.users[this.selected][0]});
      this.afs.doc('posts/'+postid).update({branch: this.users[this.selected][1]});
      this.afs.doc('posts/'+postid).update({name: this.selected});
    }

    if (this.comm != undefined &&  this.comm != ''){
      this.afs.doc('posts/'+postid).update({comments: this.post['comments'] + this.comm});
      var modified_dt = this.formatTodayDate();
      this.afs.doc('posts/'+postid).update({date_modified: modified_dt});
    }
    this.getData();
  }

  archieve(postid){
    this.afs.doc('posts/'+postid).update({archieved_gr: true});
    this.getData();
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
  
  approve_gazeta(postid, check){
    if (check.checked_gazeta || check.checked_lviv || check.checked_regions || check.checked_site) {
      var element11 = document.getElementById("1");
      this.afs.doc('posts/'+postid).update({checked_gazeta: false});
      this.afs.doc('posts/'+postid).update({checked_lviv: false});
      this.afs.doc('posts/'+postid).update({checked_regions: false});
      this.afs.doc('posts/'+postid).update({checked_site: false});
      element11.classList.remove("approve");
      element11.classList.add("rej");
    } 
    if (!(check.checked_gazeta || check.checked_lviv || check.checked_regions || check.checked_site)){
      var element12 = document.getElementById("1");
      element12.classList.remove("rej");
      element12.classList.add("approve");

      if (check.mediaplan_gazeta){
        this.afs.doc('posts/'+postid).update({checked_gazeta: true});
      }
      if (check.mediaplan_site){
        this.afs.doc('posts/'+postid).update({checked_site: true});
      }
      if (check.mediaplan_lviv){

        this.afs.doc('posts/'+postid).update({checked_lviv: true});
      }
      if (check.mediaplan_regions){
        this.afs.doc('posts/'+postid).update({checked_regions: true});
      }
    }
    this.getData();
  }
  
  showPost(postid, postdata){
    this.dialogRef.open(ShowMediaComponent, {
      height: '90vh',
      data: {
        postId: postid,
        postdata: postdata
      }
    });
  }

  
}