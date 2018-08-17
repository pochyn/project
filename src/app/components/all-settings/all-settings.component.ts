import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatDatepicker, MatTableDataSource } from '@angular/material';
import { AuthService } from './../../services/auth.service';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';

import * as moment from 'moment';
@Component({
  selector: 'app-all-settings',
  templateUrl: './all-settings.component.html',
  styleUrls: ['./all-settings.component.css']
})
export class AllSettingsComponent implements OnInit {
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
    
  }
  reset(email){
    this.auth.resetPassword(email);
    this.router.navigate(['login']);
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
