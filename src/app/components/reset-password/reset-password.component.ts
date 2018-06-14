import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  ;


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  usercreds = {
    email: '',
    password: ''
  }
  email: any;

  constructor(private router: Router, private auth: AuthService, private snackBar: MatSnackBar,
    private location: Location) {
    
    // window.location.reload();

  }
  
    emailFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
    ]);
  
    passwordFormControl: FormControl = new FormControl('', [
      Validators.required
    ]);

  ngOnInit() {
  }

  login() {
    let response = this.auth.login(this.usercreds);   
    response.catch((err) => {
      if (err.code == 'auth/user-not-found')
        this.snackBar.open('User not found', 'Close', { duration: 3000 });
      if (err.code == 'auth/wrong-password')
        this.snackBar.open('Wrong Password', 'Close', { duration: 3000 });
    })
  }

  twitterLogin() {
    let response = this.auth.twitterLogin(this.usercreds);
  }

  signup() {
    this.router.navigate(['signup']);
  }
  reset(email){
    this.auth.resetPassword(email);
    this.router.navigate(['login']);
  }

  goBack(){
    this.router.navigate(['login']);
  }

}