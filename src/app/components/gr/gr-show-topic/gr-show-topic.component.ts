import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatDatepicker, MatTableDataSource } from '@angular/material';

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
  selector: 'app-gr-show-topic',
  templateUrl: './gr-show-topic.component.html',
  styleUrls: ['./gr-show-topic.component.css']
})
export class GrShowTopicComponent implements OnInit {
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
  hours = ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
  selected: any;
  selected_hour: any;
  journ = [];



  typeControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
    

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

    this.post = this.data['postdata'];
    this.id = this.data['postId'];

    var element1 = document.getElementById("1");
    if (this.post['checked_gazeta']){
      element1.classList.toggle("approve");
    } else {
      element1.classList.toggle("rej");
    }

    var element2 = document.getElementById("2");
    if (this.post['checked_site']){
      element2.classList.toggle("approve");
    } else {
      element2.classList.toggle("rej");
    }

    var element3 = document.getElementById("3");
    if (this.post['checked_lviv']){
      element3.classList.toggle("approve");
    } else {
      element3.classList.toggle("rej");
    }

    var element4 = document.getElementById("4");
    if (this.post['checked_regions']){
      element4.classList.toggle("approve");
    } else {
      element4.classList.toggle("rej");
    }
  }

  showData(){
    
  }

  getTypes(arr){

      if(arr.indexOf("Газета") > -1){
        this.gazeta_type = true;
        this.checked_gazeta = this.post['checked_gazeta']
      } else {
        this.gazeta_type = false;
        this.checked_gazeta = false;
      }
      if(arr.indexOf("Сайт") > -1){
        this.site_type = true;
        this.checked_site = this.post['checked_site']
      } else {
        this.site_type = false;
        this.checked_site = false;
      }
      if(arr.indexOf("Львів") > -1){
        this.lviv_type = true;
        this.checked_lviv = this.post['checked_lviv']
      } else {
        this.lviv_type = false;
        this.checked_lviv = false;
      }
      if(arr.indexOf("Регіони") > -1){
        this.regions_type = true;
        this.checked_regions = this.post['checked_regions']
      } else {
        this.regions_type = false;
        this.checked_regions = false;
      }
  }
  getPost(postId) {
    this.postDoc = this.afs.doc('posts/'+postId);
    this.post = this.postDoc.valueChanges();
  }

  changePost(postid, data){


    var sbm_dt;
    var options = {  
      year: "numeric", month: "numeric",  
      day: "numeric"
    };  
    if (this.deadln != undefined){
        sbm_dt = this.deadln.toLocaleDateString ("en-us", options);
    } else {
      sbm_dt ='';
    }
    if (this.selected_types != undefined &&  this.selected_types != ''){
      this.getTypes(this.selected_types);
      this.afs.doc('posts/'+postid).update({gazeta_type: this.gazeta_type});
      this.afs.doc('posts/'+postid).update({site_type: this.site_type});
      this.afs.doc('posts/'+postid).update({lviv_type: this.lviv_type});
      this.afs.doc('posts/'+postid).update({regions_type: this.regions_type});
      this.afs.doc('posts/'+postid).update({checked_gazeta: this.checked_gazeta});
      this.afs.doc('posts/'+postid).update({checked_site: this.checked_site});
      this.afs.doc('posts/'+postid).update({checked_lviv: this.checked_lviv});
      this.afs.doc('posts/'+postid).update({checked_regions: this.checked_regions});
    }
    this.afs.doc('posts/'+postid).update({deadline: sbm_dt});
    if (this.selected != undefined &&  this.selected != ''){
      this.afs.doc('posts/'+postid).update({author: this.users[this.selected][0]});
      this.afs.doc('posts/'+postid).update({branch: this.users[this.selected][1]});
      this.afs.doc('posts/'+postid).update({name: this.selected});
    }

    if (this.comm != undefined &&  this.comm != ''){
      this.afs.doc('posts/'+postid).update({comments: this.post['comments'] + this.comm});
      var today = new Date();
      var hour = today.getHours();
      var min = today.getMinutes();
      today.setHours(hour);
      today.setMinutes(min);
      var options1 = {  
        year: "numeric", month: "numeric",  
        day: "numeric", hour: "2-digit", minute: "2-digit"  
      };  
      var modified_dt = today.toLocaleTimeString("en-us", options1);
      this.afs.doc('posts/'+postid).update({date_modified: modified_dt});

    }
  }

  archieve(postid){
    this.afs.doc('posts/'+postid).update({archieved_gr: true});
  }
  
  approve_gazeta(postid, check){
    if (check) {
      var element11 = document.getElementById("1");
      this.afs.doc('posts/'+postid).update({checked_gazeta: false});
      element11.classList.remove("approve");
      element11.classList.add("rej");
    } 
    if (!check){
      var element12 = document.getElementById("1");
      this.afs.doc('posts/'+postid).update({checked_gazeta: true});
      element12.classList.remove("rej");
      element12.classList.add("approve");
    }
  }
  approve_site(postid, check){
    if (check) {
      this.afs.doc('posts/'+postid).update({checked_site: false});
      var element11 = document.getElementById("2");
      element11.classList.remove("approve");
      element11.classList.add("rej");
    } 
    if (!check){
      this.afs.doc('posts/'+postid).update({checked_site: true});
      var element12 = document.getElementById("2");
      element12.classList.remove("rej");
      element12.classList.add("approve");
    }
  }
  approve_lviv(postid, check){
    if (check) {
      this.afs.doc('posts/'+postid).update({checked_lviv: false});
      var element11 = document.getElementById("3");
      element11.classList.remove("approve");
      element11.classList.add("rej");
    } 
    if (!check){
      this.afs.doc('posts/'+postid).update({checked_lviv: true});
      var element12 = document.getElementById("3");
      element12.classList.remove("rej");
      element12.classList.add("approve");
    }
  }
  approve_regions(postid, check){
    if (check) {
      this.afs.doc('posts/'+postid).update({checked_regions: false});
      var element11 = document.getElementById("4");
      element11.classList.remove("approve");
      element11.classList.add("rej");;
    } 
    if (!check){
      this.afs.doc('posts/'+postid).update({checked_regions: true});
      var element12 = document.getElementById("4");
      element12.classList.remove("rej");
      element12.classList.add("approve");
    }
  }
  reject(postid){
    this.afs.doc('posts/'+postid).update({checked_gazeta: false});
    this.afs.doc('posts/'+postid).update({checked_site: false});
    this.afs.doc('posts/'+postid).update({checked_lviv: false});
    this.afs.doc('posts/'+postid).update({checked_regions: false});
  }

  showPost(postid, postdata){
    this.dialogRef.open(GrShowTopicComponent, {
      height: '90vh',
      width: '90vw',
      data: {
        postId: postid,
        postdata: postdata
      }
    });
  }

  
}

