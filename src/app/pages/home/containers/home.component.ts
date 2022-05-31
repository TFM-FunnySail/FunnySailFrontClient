import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: any;

  linksMenus: any[] = [
    {
      name: 'home.linksMenus.activities',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      linkPage: 'activities'
    },
    {
      name: 'home.linksMenus.services',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      linkPage: 'services'
    },
    {
      name: 'home.linksMenus.boatRental',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      linkPage: 'boats'
    }
  ];

  comments: any[] = [
    {
      user: 'home.comments.user',
      date: '05/02/21',
      stars: 5,
      comment: 'home.comments.comment'
    },
    {
      user: 'home.comments.user',
      date: '05/02/21',
      stars: 5,
      comment: 'home.comments.comment'
    },
    {
      user: 'home.comments.user',
      date: '05/02/21',
      stars: 5,
      comment: 'home.comments.comment'
    },
    {
      user: 'home.comments.user',
      date: '05/02/21',
      stars: 5,
      comment: 'home.comments.comment'
    }
  ];


  activities: string | undefined = '';

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
   // This is intentional
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      initialDate: ['', Validators.required],
      endDate: ['', Validators.required],
      typeBoat: ['', Validators.required]
    });
  }

  find() {
    let type = '';
    if (this.form.get('typeBoat').value) {
      type = this.form.get('typeBoat').value;
    }
    let initialDate = '';
    if (this.form.get('initialDate').value) {
      console.log(this.form.get('initialDate').value);
      initialDate = (this.form.get('initialDate').value as unknown as Date).toISOString();
    }
    let endDate = '';
    if (this.form.get('endDate').value) {
      console.log(this.form.get('endDate').value);
      endDate = (this.form.get('endDate').value as unknown as Date).toISOString();
    }

    this.router.navigate(['/boats'], { queryParams: { type, initialDate , endDate } });
  }

  rent() {
    this.router.navigate(['/rent-boat']);
  }
  boats(){
    this.router.navigate(['/boats']);
  }




}
