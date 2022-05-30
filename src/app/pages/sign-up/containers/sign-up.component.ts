import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AddUserInputDTO, UsersService} from "../../../shared/sdk";

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  pageF = 1;
  registerForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              protected userService: UsersService,) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_@./#&+-]{8,25}$')]],
      confirmPassword: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_@./#&+-]{8,25}$')]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      birthDay: ['', [Validators.required,]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      Address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      City: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      State: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      ZipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      Country: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      /*identification: ['', [/!*Validators.required*!/, Validators.pattern('^[0-9A-Z]{10}$')]],
      paymentMethod: ['', []],
      cardName: ['', [Validators.minLength(3), Validators.maxLength(20)]],
      cardNumber: ['', [Validators.pattern('^[0-9]{16}$')]],
      cardExpiration: ['', [Validators.pattern('^[0-9]{2}/[0-9]{2}$')]],
      cardCvv: ['', [Validators.pattern('^[0-9]{3}$')]],*/
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  ChangePage(direction: string){
    if(direction == 'next' && this.pageF < 4){
      this.GoToPage(this.pageF + 1);
    }else if(direction == 'prev' && this.pageF > 1){
      this.GoToPage(this.pageF - 1);
    }
  }

  GoToPage(page: number){
    //Se vacia el marcador de pagina
    switch(this.pageF){
      case 1:
        document.getElementById('P1')!.className = "";
        break;
      case 2:
        document.getElementById('P2')!.className = "";
        break;
      case 3:
        document.getElementById('P3')!.className = "";
        break;
      case 4:
        document.getElementById('P4')!.className = "";
        break;
    }
    //Se actualiza la página y se pinta el marcador
    this.pageF = page;
    switch(this.pageF){
      case 1:
        document.getElementById('P1')!.className = "is-active";
        break;
      case 2:
        document.getElementById('P2')!.className = "is-active";
        break;
      case 3:
        document.getElementById('P3')!.className = "is-active";
        break;
      case 4:
        document.getElementById('P4')!.className = "is-active";
        break;
    }
  }

  SubmitNewUser(){
    //Now that all the fields are valid, we can send the data to the server
    console.log(this.registerForm.get('birthday')?.value);
    /*console.log((document.getElementById('birthday') as HTMLInputElement).value);*/
    console.log(this.registerForm.value);
    this.userService.apiUsersPost(this.registerForm.value).subscribe(()=>{
      this.router.navigate(['']);
    }, (error) => {
      console.log(error);
    });
  }
}
