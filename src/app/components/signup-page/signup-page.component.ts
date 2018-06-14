import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const g_regex = '1111';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  usercreds = {
    email: '',
    password: '',
    displayName: '',
    branch: '',
    posada: ''
  }

  constructor(private auth: AuthService, private router: Router) { }

  selected: any;
  types = ['Спорт', 'Світ', "Здоров'я", 'Технології', 'Оперативний редактор', 'Головний редактор'];
  posadas = ['Журналіст', 'Оперативний Редактор - Газета', 'Оперативний редактор - Сайт', 'Керівник відділу', 'Головний редактор']

  emailFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
  ]);
  passwordFormControl: FormControl = new FormControl('', [
    Validators.required
  ]);
  branchFormControl: FormControl = new FormControl('', [
    Validators.required
  ]);
  posadaFormControl: FormControl = new FormControl('', [
    Validators.required
  ]);
  nameFormControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
  }

  createAccount() {
    console.log(this.usercreds);
    this.auth.signUp(this.usercreds);
  }

  goBack(){
    this.router.navigate(['login']);
  }

}
