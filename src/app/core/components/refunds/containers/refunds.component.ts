import {Component, Input, OnInit} from '@angular/core';
import { RefundOutputDTO } from "../../../../shared/sdk";

@Component({
  selector: 'refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.scss']
})
export class RefundsComponent implements OnInit {

  @Input() refund: RefundOutputDTO = {};
  name: string = '';
  createdDate: string = '';
  description: string = '';
  amountToReturn: number = 0;
  constructor() {

  }

  ngOnInit(): void {
    this.name = this.refund.id as unknown as string;
    this.createdDate = this.refund.date as string;
    this.description = this.refund.description as string;
    this.amountToReturn = this.refund.amountToReturn as number;
  }

}
