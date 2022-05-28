import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../shared/services/auth/auth.service";

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
              private router: Router,
              protected authService:AuthService) {

  }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (!this.form.invalid){
        this.authService.login(this.form.value,()=>{
          this.router.navigate(['']);
        },(err: { error: { esMessage: any; }; message: any; })=>{
          const errorMessage = err.error.esMessage ?? err.message ;
        });
      // this.router.navigateByUrl('/');
    }else
    {
      this.showAlert = true;
    }
  }
}
