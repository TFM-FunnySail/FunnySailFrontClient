import { Component, OnInit } from '@angular/core';
import {RefundOutputDTO, RefundOutputDTOGenericResponseDTO, RefundsService} from "../../../shared/sdk";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import {StorageService} from "../../../shared/services/storage/storage.service";

@Component({
  selector: 'refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.scss']
})
export class RefundsComponent implements OnInit {
  displayedColumns: string[] = ['Description', 'Amount to Return', 'Date'];
  refunds?: Array<RefundOutputDTO> | null;
  count = 0;

  constructor(protected refundsService: RefundsService,
              protected http: HttpClient,
              protected router: Router,
              private storageService: StorageService) {
  }

  ngOnInit(): void {
    const clientEmail = this.storageService.getItem("userEmail") as string;
    this.refundsService.apiRefundsGet(undefined, undefined, clientEmail).subscribe(resp => {
      this.refunds = this.handlerRefunds(resp).items;
      this.count = this.refunds?.length as number;
      console.log(this.refunds);
    });
  }

  handlerRefunds(resp: RefundOutputDTOGenericResponseDTO) {
    return resp;
  }

}
