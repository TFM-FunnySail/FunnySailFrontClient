import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: any;

  linksMenus: any[] = [
    {
      name: 'ACTIVIDADES',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      linkPage: 'activity'
    },
    {
      name: 'SERVICIOS',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      linkPage: 'service'
    },
    {
      name: 'ALQUILER DE BARCOS',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      linkPage: 'search-boat'
    }
  ];

  comments: any[] = [
    {
      user: 'USUARIO1',
      date: '05/02/21',
      stars: 5,
      comment: 'excelente servicio!!!'
    },
    {
      user: 'USUARIO2',
      date: '05/02/21',
      stars: 5,
      comment: 'excelente servicio!!!'
    },
    {
      user: 'USUARIO3',
      date: '05/02/21',
      stars: 5,
      comment: 'excelente servicio!!!'
    },
    {
      user: 'USUARIO4',
      date: '05/02/21',
      stars: 5,
      comment: 'excelente servicio!!!'
    }
  ];
  constructor(private formBuilder: FormBuilder) {
   // This is intentional
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      initialDate: ['', Validators.required],
      endDate: ['', Validators.required],
      typeBoat: ['', Validators.required]
    });
  }

  find() {
    console.log('find some boat');
  }

  rent() {
    console.log('find some boat');
  }
  activity(){
    console.log('go to activity');
  }
}
