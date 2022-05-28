import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuComponent implements OnInit {
  @Input() linkMenu: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
