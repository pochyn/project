import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatDatepicker, MatTableDataSource } from '@angular/material';
import { AuthService } from '../../../services/auth.service';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-gr-settings',
  templateUrl: './gr-settings.component.html',
  styleUrls: ['./gr-settings.component.css']
})
export class GrSettingsComponent implements OnInit {

  emailFormControl: FormControl = new FormControl('', [
    Validators.required
  ]);
  gournControl: FormControl = new FormControl('', [
    Validators.required
  ]);
  posadaControl: FormControl = new FormControl('', [
    Validators.required
  ]);
  branchControl: FormControl = new FormControl('', [
    Validators.required
  ]);


  usercreds = {
    email: '',
    password: ''
  }
  email: any;
  journ = [];
  users = {};

  posts: any;
  postsColGaz: AngularFirestoreCollection<any>;
  postsData = new MatTableDataSource(this.posts);
  displayedColumns = [ 'data.displayName', 'data.branch', 'data.posada'];
  types = ['Самостійний', 'Новини', 'Політика', "Репортери", 'Регіональні редакції', 'Здоров\'я', 'Головний редактор', 'Оперативний редактор - Сайт', 'Оперативний Редактор - Газета'];
  posadas = ['Журналіст', 'Керівник відділу', 'Самостійний', 'Оперативний редактор', 'Головний редактор']

  new_g: any;
  new_posada: any;
  new_branch: any;


  constructor(private afs: AngularFirestore,
    private dialogRef: MatDialog, private afauth: AngularFireAuth, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    let collRef = this.afs.collection('users').ref;
    let queryRef = collRef;
    queryRef.get().then((snapShot) => {
        for( let dock of snapShot.docs){
          //this.users.push({key: dock.data()['displayName'], 
          //                 value: dock.id});
          console.log(dock.data()['displayName'])
          this.journ.push(dock.data()['displayName']);
          this.users[dock.data()['displayName']] = [dock.id, dock.data()['branch']];
        }
    });
    this.postsColGaz = this.afs.collection('users');
    this.posts = this.postsColGaz.snapshotChanges()
     .map(actions => {
       return actions.map(a => {
         const data = a.payload.doc.data();
         const id = a.payload.doc.id;
         return { id, data };
       });
     })
     this.posts.subscribe(newData => this.postsData.data = newData);
  }
  reset(email){
    this.auth.resetPassword(email);
    this.router.navigate(['login']);
  }

  change_user(){
    let id = this.users[this.new_g][0];
    this.afs.doc('users/'+id).update({branch: this.new_branch});
    this.afs.doc('users/'+id).update({posada: this.new_posada});
  }


  delete(){
      var user = this.afauth.auth.currentUser;
      let coll = this.afs.collection('status').ref;
      let qurt = coll;
      qurt.get().then((snapShot) => {
        for( let dock of snapShot.docs){
          if (user.email == dock.data['email']){
            this.afs.doc('status/'+dock.id).delete();
          }
          
        }
      });

      let collRef = this.afs.collection('users').ref;
      let queryRef = collRef;
      queryRef.get().then((snapShot) => {
        for( let dock of snapShot.docs){
          if (user.email == dock.data['email'] && user.displayName == dock.data['displayName']){
            this.afs.doc('users/'+dock.id).delete();
          }
          
        }
    });
    this.router.navigate(['login']);

    user.delete().then(function() {
    }).catch(function(error) {
      // An error happened.
    });
  }

}