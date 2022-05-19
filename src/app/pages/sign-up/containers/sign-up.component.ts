import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  pageF = 1;
  registerForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,25}$')]],
      confirmPassword: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,25}$')]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      birthday: ['', [Validators.required,Validators.pattern('^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\\d\\d$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      state: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      country: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      identification: ['', [Validators.required, Validators.pattern('^[0-9A-Z]{10}$')]],
      paymentMethod: ['', []],
      cardName: ['', [Validators.minLength(3), Validators.maxLength(20)]],
      cardNumber: ['', [Validators.pattern('^[0-9]{16}$')]],
      cardExpiration: ['', [Validators.pattern('^[0-9]{2}/[0-9]{2}$')]],
      cardCvv: ['', [Validators.pattern('^[0-9]{3}$')]],
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
    //Page 1 - Email
    if(this.registerForm.get('email')?.errors){
      alert('The email is not valid');
      this.registerForm.get('email')?.reset();
      return;
    }
    if(this.registerForm.get('password')?.errors){
      alert('The password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter and one number');
      this.registerForm.get('password')?.reset();
      this.registerForm.get('confirmPassword')?.reset();
      return;
    }
    if(this.registerForm.get('confirmPassword')?.value != this.registerForm.get('password')?.value){
      alert('The passwords do not match');
      this.registerForm.get('password')?.reset();
      this.registerForm.get('confirmPassword')?.reset();
      return;
    }
    //Page 2 - Identification data
    if(this.registerForm.get('name')?.errors){
      this.registerForm.get('name')?.reset();
      if(this.registerForm.get('name')?.errors?.['required']) {
        alert('The name is required');
        return;
      } else if(this.registerForm.get('name')?.errors?.['minlength']) {
        alert('The name must be at least 3 characters long');
        return;
      } else if(this.registerForm.get('name')?.errors?.['maxlength']) {
        alert('The name must be less than 20 characters long');
        return;
      }
    }
    if(this.registerForm.get('lastName')?.errors){
      this.registerForm.get('lastName')?.reset();
      if(this.registerForm.get('lastName')?.errors?.['required']) {
        alert('The last name is required');
        return;
      } else if(this.registerForm.get('lastName')?.errors?.['minlength']) {
        alert('The last name must be at least 3 characters long');
        return;
      } else if(this.registerForm.get('lastName')?.errors?.['maxlength']) {
        alert('The last name must be less than 20 characters long');
        return;
      }
    }
    if(this.registerForm.get('identification')?.errors){
      this.registerForm.get('identification')?.reset();
      if(this.registerForm.get('identification')?.errors?.['required']) {
        alert('The ID is required');
        return;
      } else if(this.registerForm.get('identification')?.errors?.['pattern']) {
        alert('The ID must contain 9 numbers and a letter');
        return;
      }
    }
    if(this.registerForm.get('birthDate')?.errors){
      this.registerForm.get('birthDate')?.reset();
      if(this.registerForm.get('birthDate')?.errors?.['required']) {
        alert('The birth date is required');
        return;
      }
    }
    if(this.registerForm.get('phone')?.errors){
      this.registerForm.get('phone')?.reset();
      if(this.registerForm.get('phone')?.errors?.['required']) {
        alert('The phone is required');
        return;
      } else if(this.registerForm.get('phone')?.errors?.['pattern']) {
        alert('The phone must contain 10 numbers');
        return;
      }
    }
    //Page 3 - Address
    if(this.registerForm.get('address')?.errors){
      this.registerForm.get('address')?.reset();
      if(this.registerForm.get('address')?.errors?.['required']) {
        alert('The address is required');
        return;
      } else if(this.registerForm.get('address')?.errors?.['minlength']) {
        alert('The address must be at least 3 characters long');
        return;
      } else if(this.registerForm.get('address')?.errors?.['maxlength']) {
        alert('The address must be less than 50 characters long');
        return;
      }
    }
    if(this.registerForm.get('city')?.errors){
      this.registerForm.get('city')?.reset();
      if(this.registerForm.get('city')?.errors?.['required']) {
        alert('The city is required');
        return;
      } else if(this.registerForm.get('city')?.errors?.['minlength']) {
        alert('The city must be at least 3 characters long');
        return;
      } else if(this.registerForm.get('city')?.errors?.['maxlength']) {
        alert('The city must be less than 20 characters long');
        return;
      }
    }
    if(this.registerForm.get('state')?.errors){
      this.registerForm.get('state')?.reset();
      if(this.registerForm.get('state')?.errors?.['required']) {
        alert('The state is required');
        return;
      } else if(this.registerForm.get('state')?.errors?.['minlength']) {
        alert('The state must be at least 3 characters long');
        return;
      } else if(this.registerForm.get('state')?.errors?.['maxlength']) {
        alert('The state must be less than 20 characters long');
        return;
      }
    }
    if(this.registerForm.get('country')?.errors){
      this.registerForm.get('country')?.reset();
      if(this.registerForm.get('country')?.errors?.['required']) {
        alert('The country is required');
        return;
      } else if(this.registerForm.get('country')?.errors?.['minlength']) {
        alert('The country must be at least 3 characters long');
        return;
      } else if(this.registerForm.get('country')?.errors?.['maxlength']) {
        alert('The country must be less than 20 characters long');
        return;
      }
    }
    if(this.registerForm.get('zip')?.errors){
      this.registerForm.get('zip')?.reset();
      if(this.registerForm.get('zip')?.errors?.['required']) {
        alert('The zip code is required');
        return;
      } else if(this.registerForm.get('zip')?.errors?.['pattern']) {
        alert('The zip code must contain 5 numbers');
        return;
      }
    }
    //Page 4 - Payment
    if(this.registerForm.get('cardNumber')?.errors){
      this.registerForm.get('cardNumber')?.reset();
      if(this.registerForm.get('cardNumber')?.errors?.['required']) {
        alert('The card number is required');
        return;
      } else if(this.registerForm.get('cardNumber')?.errors?.['pattern']) {
        alert('The card number must contain 16 numbers');
        return;
      }
    }
    if(this.registerForm.get('cardName')?.errors){
      this.registerForm.get('cardName')?.reset();
      if(this.registerForm.get('cardName')?.errors?.['minlength']) {
        alert('The card name must be at least 3 characters long');
        return;
      } else if(this.registerForm.get('cardName')?.errors?.['maxlength']) {
        alert('The card name must be less than 20 characters long');
        return;
      }
    }
    if(this.registerForm.get('cardExpiration')?.errors){
      this.registerForm.get('cardExpiration')?.reset();
      if(this.registerForm.get('cardExpiration')?.errors?.['pattern']) {
        alert('The card expiration must contain 4 numbers');
        return;
      }
    }
    if(this.registerForm.get('cardCVV')?.errors){
      this.registerForm.get('cardCVV')?.reset();
      if(this.registerForm.get('cardCVV')?.errors?.['pattern']) {
        alert('The card CVV must contain 3 numbers');
        return;
      }
    }
    if(this.registerForm.get('paymentMethod')?.errors){
      this.registerForm.get('paymentMethod')?.reset();
    }
    //Now that all the fields are valid, we can send the data to the server
    console.log(this.registerForm.value);
  }
}
