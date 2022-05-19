import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'card-product',
  templateUrl: './card-product.component.html'
})
export class CardProductComponent implements OnInit {

  @Input()
  public product: any;

  constructor() {
    // This is intentional
  }

  ngOnInit(): void {
    // This is intentional
  }

}
