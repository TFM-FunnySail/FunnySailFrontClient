import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsersService} from "../../../shared/sdk";
import {StorageService} from "../../../shared/services/storage/storage.service";
import {EditUserInputDTO} from "../../../shared/sdk";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  dataForm: FormGroup;
  user: any;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              protected userService: UsersService,
              protected storageService:StorageService) {
    this.dataForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,25}$')]],
      confirmPassword: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,25}$')]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      birthday: ['', [Validators.required,Validators.pattern('^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\\d\\d$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      identification: ['', [Validators.required, Validators.pattern('^[0-9A-Z]{10}$')]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      state: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      country: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      paymentMethod: ['', []],
      cardName: ['', [Validators.minLength(3), Validators.maxLength(20)]],
      cardNumber: ['', [Validators.pattern('^[0-9]{16}$')]],
      cardExpiration: ['', [Validators.pattern('^[0-9]{2}/[0-9]{2}$')]],
      cardCvv: ['', [Validators.pattern('^[0-9]{3}$')]],
    });

    this.dataForm.disable();
  }

  ngOnInit(): void {
    this.userService.apiUsersGet("",this.dataForm.value.email).subscribe(resp=>{
      if (resp.items) {
        console.log(resp.items[0]);
        this.user={
          name: resp.items[0].firstName,
          lastName: resp.items[0].lastName,
        };
        this.dataForm.get(['name'])?.setValue(resp.items[0].firstName);
        this.dataForm.get(['lastName'])?.setValue(resp.items[0].lastName);
        this.dataForm.get(['email'])?.setValue(resp.items[0].email);
        this.dataForm.get(['phone'])?.setValue(resp.items[0].phoneNumber);
        this.dataForm.get(['identification'])?.setValue(resp.items[0].userId);
      }
    });
  }

  onSubmit() {

  }

  show_form() {
    this.dataForm.enable();
    (document.getElementById('editButton') as HTMLButtonElement).style.display = 'none';
    (document.getElementById('saveButton') as HTMLButtonElement).style.display = 'block';
  }

  save_form() {
    this.dataForm.disable();
    const datos: EditUserInputDTO = {
      firstName: this.dataForm.value.name,
      lastName: this.dataForm.value.lastName,
      //email: this.dataForm.value.email,
      //phoneNumber: this.dataForm.value.phone,
      //birthday: this.dataForm.value.birthday,
      //password: this.dataForm.value.password,
    };
    (document.getElementById('editButton') as HTMLButtonElement).style.display = 'block';
    (document.getElementById('saveButton') as HTMLButtonElement).style.display = 'none';
    this.userService.apiUsersIdPut(this.dataForm.value.identification,datos).subscribe(resp=>{
      console.log(resp);
    });
  }
}
