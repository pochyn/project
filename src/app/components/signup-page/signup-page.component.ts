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

  password: any;

  constructor(private auth: AuthService, private router: Router) { }

  selected: any;
  types = ['Самостійний', 'Новини', 'Політика', "Репортери", 'Регіональні редакції', 'Здоров\'я', 'Головний редактор', 'Оперативний редактор - Сайт', 'Оперативний Редактор - Газета'];
  posadas = ['Журналіст', 'Керівник відділу']

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
    console.log(this.usercreds.branch)
    if (this.usercreds.branch == "Головний редактор"){
      this.usercreds.posada = "Головний редактор"
    }
    if (this.usercreds.branch == "Самостійний"){
      this.usercreds.posada = "Самостійний"
    }
    if (this.usercreds.branch == "Оперативний редактор - Сайт"){
      this.usercreds.branch = "Оперативний редактор"
      this.usercreds.posada = "Оперативний редактор - Сайт"
    }
    if (this.usercreds.branch == "Оперативний Редактор - Газета"){
      this.usercreds.branch = "Оперативний редактор"
      this.usercreds.posada = "Оперативний Редактор - Газета"
    }
    console.log(this.usercreds);
    this.auth.signUp(this.usercreds);
  }

  goBack(){
    this.router.navigate(['login']);
  }

}
