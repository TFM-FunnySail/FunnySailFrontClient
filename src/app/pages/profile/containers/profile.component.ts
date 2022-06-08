import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {
  UserOutputDTO,
  UsersService,
  EditUserInputDTO,
  BoatsService,
  BoatOutputDTO, BoatOutputDTOGenericResponseDTO,
} from "../../../shared/sdk";

import {StorageService} from "../../../shared/services/storage/storage.service";
import {AuthService} from "../../../shared/services/auth/auth.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  dataForm: FormGroup;
  user: any = {};
  userData: UserOutputDTO;
  boats: Array<BoatOutputDTO> | null | undefined = [];

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              protected userService: UsersService,
              protected storageService:StorageService,
              protected authService:AuthService,
              private boatsService: BoatsService)
  {
    this.dataForm = this.formBuilder.group({
      name: ['', [Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.email]],/*
      password: ['', [Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,25}$')]],
      confirmPassword: ['', [Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,25}$')]],*/
      lastName: ['', [Validators.minLength(3), Validators.maxLength(20)]],
      birthday: ['', []],
      phone: ['', [Validators.pattern('^[0-9]{10}$')]],
      identification: ['', [Validators.pattern('^[0-9A-Z]{10}$')]],
      address: ['', [Validators.minLength(3), Validators.maxLength(50)]],
      city: ['', [Validators.minLength(3), Validators.maxLength(20)]],
      state: ['', [Validators.minLength(3), Validators.maxLength(20)]],
      zip: ['', [Validators.pattern('^[0-9]{5}$')]],
      country: ['', [Validators.minLength(3), Validators.maxLength(20)]],
    });
    this.userData = {};
    this.dataForm.disable();

  }

  ngOnInit(): void {
    const id = this.storageService.getItem('userId');
    if(id)
      this.userService.apiUsersIdGet(id).subscribe((resp: UserOutputDTO)=>{
        if(resp){
          console.log(resp)
          this.userData = resp;
          this.checkBoats();
          this.user = {
            name: resp.firstName,
            lastName: resp.lastName,
          };
          this.dataForm.get(['name'])?.setValue(resp.firstName);
          this.dataForm.get(['lastName'])?.setValue(resp.lastName);
          this.dataForm.get(['email'])?.setValue(resp.email);
          this.dataForm.get(['phone'])?.setValue(resp.phoneNumber);
          this.dataForm.get(['birthday'])?.setValue(resp.birthDay?.split('T')[0]);
          this.dataForm.get(['address'])?.setValue(resp.address);
          this.dataForm.get(['city'])?.setValue(resp.city);
          this.dataForm.get(['state'])?.setValue(resp.state);
          this.dataForm.get(['zip'])?.setValue(resp.zipCode);
          this.dataForm.get(['country'])?.setValue(resp.country);
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
    const id = this.storageService.getItem('userId');

    if(id) {
      this.userService.apiUsersIdGet(id).subscribe(resp => {
        console.log(resp);
      });
    }

    let datosActualizados: EditUserInputDTO = {};
    if(this.userData.firstName != this.dataForm.value.name){
      datosActualizados.firstName = this.dataForm.value.name;
      this.user.name = this.dataForm.value.name;
    }else{
      datosActualizados.firstName = this.userData.firstName;
    }
    if(this.userData.lastName != this.dataForm.value.lastName){
      datosActualizados.lastName = this.dataForm.value.lastName;
      this.user.lastName = this.dataForm.value.lastName;
    }else{
      datosActualizados.lastName = this.userData.lastName;
    }

    if(this.userData.birthDay != this.dataForm.value.birthday+"T00:00:00"){
      datosActualizados.birthDay = this.dataForm.value.birthday;
    }else{
      datosActualizados.birthDay = this.userData.birthDay;
    }

    if(this.userData.phoneNumber != this.dataForm.value.phone){
      datosActualizados.phoneNumber = this.dataForm.value.phone;
    } else{
      datosActualizados.phoneNumber = this.userData.phoneNumber;
    }

    if(this.userData.address != this.dataForm.value.address){
      datosActualizados.address = this.dataForm.value.address;
    }else{
      datosActualizados.address = this.userData.address;
    }

    if(this.userData.city != this.dataForm.value.city){
      datosActualizados.city = this.dataForm.value.city;
    }else{
      datosActualizados.city = this.userData.city;
    }

    if(this.userData.country != this.dataForm.value.country){
      datosActualizados.country = this.dataForm.value.country;
    } else{
      datosActualizados.country = this.userData.country;
    }

    if(this.userData.state != this.dataForm.value.state){
      datosActualizados.state = this.dataForm.value.state;
    } else{
      datosActualizados.state = this.userData.state;
    }

    if(this.userData.zipCode != this.dataForm.value.zip){
      datosActualizados.zipCode = this.dataForm.value.zip;
    }else{
      datosActualizados.zipCode = this.userData.zipCode;
    }

    datosActualizados.receivePromotion = this.userData.receivePromotion;

    console.log(datosActualizados);

    (document.getElementById('editButton') as HTMLButtonElement).style.display = 'block';
    (document.getElementById('saveButton') as HTMLButtonElement).style.display = 'none';
    if(id)
      this.userService.apiUsersIdPut(id,datosActualizados).subscribe(resp=>{
        console.log(resp);
      });
  }

  logout() {
    this.storageService.deleteItem('userId');
    this.storageService.deleteItem("User");
    this.storageService.deleteItem("userEmail");
    this.storageService.deleteItem("boatId");
    this.authService.logout();
    this.router.navigate(['home']);
      setTimeout(() => {
        window.location.reload();
      },  400);
  }

  checkBoats(){
    if(this.userData.userId != undefined){
      this.boatsService.apiBoatsGet(undefined, undefined, undefined,undefined,  undefined, undefined,undefined,undefined, this.userData?.userId).subscribe((barcos: BoatOutputDTOGenericResponseDTO)=>{
        if(barcos)
          this.boats = barcos.items;
      });
    }
  }
}
