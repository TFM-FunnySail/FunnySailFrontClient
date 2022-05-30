import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'change-password-card',
  templateUrl: './change-password-card.component.html',
  styleUrls: ['./change-password-card.component.scss']
})
export class ChangePasswordCardComponent implements OnInit {
  pwdForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.pwdForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_@./#&+-]{8,25}$')]],
      confirmPassword: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_@./#&+-]{8,25}$')]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.pwdForm.value);
  }
}
