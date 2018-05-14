import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { constants } from '../constants';
import { BehaviorSubject } from 'rxjs/Rx';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  private authState: any;
  twitterUser = new BehaviorSubject<boolean>(false);
  

  constructor(private afauth: AngularFireAuth, private afs: AngularFirestore,
    private router: Router) {
    this.afauth.authState.subscribe((user) => {
      this.authState = user;
    
    })
    
  }

  //check Auth
  authUser(): boolean {  
    return this.authState !== null && this.authState !== undefined ? true : false;
  }

  //return details of signed In user
  currentUserDetails(): firebase.User {
    return this.afauth.auth.currentUser;
  }
  
  get currentUserId(): string {
    return this.authState !== null ? this.authState.uid : '';
  }
  
  //Signup
  signUp(usercreds) {
    return this.afauth.auth.createUserWithEmailAndPassword(usercreds.email,
      usercreds.password).then((user) => {
        this.authState = user;
        this.afauth.auth.currentUser.updateProfile({
          displayName: usercreds.displayName,
          photoURL: constants.PROFILE_PIC
        }).then(() => {
          this.setUserData(usercreds.email, usercreds.displayName, user.photoURL, usercreds.branch);
        })
      })
  }

  //set user data to a local users collections.
  setUserData(email: string, displayName: string, photoURL: string, branch: string) {
    const path = `users/${this.currentUserId}`;
    const statuspath = `status/${this.currentUserId}`;
    const userdoc = this.afs.doc(path);
    const status = this.afs.doc(statuspath);
    userdoc.set({
      email: email,
      displayName: displayName,
      branch: branch,
      photoURL: photoURL
    });
    status.set({
      email: email,
      status: 'online'
    });
    this.router.navigate(['dashboard']);
  }

  //Google Login Update
  googleUserData(email: string, displayName: string, photoURL: string) {
    // let docRef = this.afs.collection('users/' + this.afauth.auth.currentUser.uid).ref;
    // if (docRef != undefined) {
      this.afs.doc('users/' + this.afauth.auth.currentUser.uid).set({
        email: email,
        displayName: displayName,
        photoURL: photoURL
      }).then(() => {
        this.afs.doc('status/' + this.afauth.auth.currentUser.uid).set({
          email: email,
          status: 'offline'
        })
      })
    // }
    // else {
    //   this.afs.doc('users/' + this.afauth.auth.currentUser.uid).set({
    //     email: email,
    //     displayName: displayName,
    //     photoURL: photoURL
    //   }).then(() => {
    //     this.afs.doc('status/' + this.afauth.auth.currentUser.uid).set({
    //       email: email,
    //       status: 'offline'
    //     })
    //   })
    // }
      this.router.navigate(['dashboard']);
  }

  //Login function
  login(usercreds) {
    return this.afauth.auth.signInWithEmailAndPassword(usercreds.email,
      usercreds.password).then((user) => {
        this.authState = user;
        const status = 'online';
        this.setUserStatus(status);
        this.router.navigate(['dashboard']);
      })
  }

  //Sets the user status to online/offline  
  setUserStatus(status) {
    const statuscollection = this.afs.doc(`status/${this.currentUserId}`);
    const data = {
      status: status
    }
    statuscollection.update(data).catch((error) => {
      console.log(error);
    })
  }

    //Logout function
    logout() {
      this.setUserStatus('offline');
      this.afauth.auth.signOut().then(() => {
        this.router.navigate(['login']);
        // window.location.reload();
      })
        .catch((err) => {
        console.log(err);
      })
    }
    

  twitterLogin(usercreds) {
    this.afauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((user) => {
      this.googleUserData(this.afauth.auth.currentUser.email, this.afauth.auth
        .currentUser.displayName, this.afauth.auth.currentUser.photoURL);
      console.log(this.afauth.auth.currentUser);
      this.twitterUser.next(true);
    })
  }
}
