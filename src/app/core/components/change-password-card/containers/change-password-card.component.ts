import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UserOutputDTO } from "../../../../shared/sdk";

@Component({
  selector: 'change-password-card',
  templateUrl: './change-password-card.component.html',
  styleUrls: ['./change-password-card.component.scss']
})
export class ChangePasswordCardComponent implements OnInit {

  pwdForm: FormGroup;
  userData: UserOutputDTO;

  constructor(private formBuilder: FormBuilder,) {
    this.pwdForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_@./#&+-]{8,25}$')]],
      confirmPassword: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_@./#&+-]{8,25}$')]],
    });
    this.userData = {};
  }

  ngOnInit(): void {
  }

  onSubmit() {
    /*const id = this.storageService.getItem('userId');

    if(id) {
      this.userService.apiUsersIdGet(id).subscribe((resp: UserOutputDTO) => {
        this.userData = resp;
      });
    }

    let datosActualizados: EditUserInputDTO = {};
    console.log(this.pwdForm.value);
    (document.getElementById('editButton') as HTMLButtonElement).style.display = 'block';
    (document.getElementById('saveButton') as HTMLButtonElement).style.display = 'none';
    if(id)
      this.userService.apiUsersIdPut(id,datosActualizados).subscribe(resp=>{
        console.log(resp);
      });*/
    (document.getElementById("close") as HTMLButtonElement).click();
  }
}
