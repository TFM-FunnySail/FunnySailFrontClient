import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  form: any;
  lat: number = 38.385347;
  lng: number = -0.508487;
  zoom: number = 17;

  constructor(private formBuilder: FormBuilder) {
    console.log('algooooo');
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      message: ['', Validators.required]
    });
  }

  send(){
    console.log('send');
  }
}
