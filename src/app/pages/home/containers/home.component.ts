import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
   // This is intentional
  }

  ngOnInit(): void {
    // This is intentional
  }

  activity(){
    console.log('go to activity');
  }
}
