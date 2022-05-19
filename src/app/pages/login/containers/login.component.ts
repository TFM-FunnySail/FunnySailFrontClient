import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any;
  users: any;
  showAlert = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
  }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const userFind = false;
    if(userFind)
    {
      alert('Usuario Logeado!');
      this.router.navigateByUrl('/');
    }else
    {
      this.showAlert = true;
    }
  }
}
