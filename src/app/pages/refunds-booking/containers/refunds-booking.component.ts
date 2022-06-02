import { Component, OnInit } from '@angular/core';
import {
  BookingOutputDTO, BookingOutputDTOGenericResponseDTO, BookingService,
  RefundOutputDTO,
  RefundOutputDTOGenericResponseDTO,
  RefundsService
} from "../../../shared/sdk";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import {StorageService} from "../../../shared/services/storage/storage.service";

@Component({
  selector: 'refunds-booking',
  templateUrl: './refunds-booking.component.html',
  styleUrls: ['./refunds-booking.component.scss']
})
export class RefundsBookingComponent implements OnInit {
  displayedColumns: string[] = ['Description', 'Amount to Return', 'Date'];
  refunds: Array<RefundOutputDTO> = [];
  bookings: Array<BookingOutputDTO> = [];
  countRefunds = 0;
  countBookings = 0;
  show = 'true';

  constructor(protected refundsService: RefundsService,
              private bookingService: BookingService,
              protected http: HttpClient,
              protected router: Router,
              private storageService: StorageService) {
  }

  ngOnInit(): void {
    const clientEmail = this.storageService.getItem("userEmail") as string;
    console.log(clientEmail);
    this.refundsService.apiRefundsGet(undefined, undefined, clientEmail).subscribe(resp => {
      console.log(resp);
      this.refunds = this.handlerRefunds(resp).items as Array<RefundOutputDTO>;
      this.countRefunds = this.refunds?.length as number;
      console.log(this.refunds);
    });

    const clientId = this.storageService.getItem("userId") as string;
    this.bookingService.apiBookingGet(undefined, clientId).subscribe(resp => {
      if(resp) {
        const items = this.handlerBookings(resp).items;
        console.log(items);
        if(items) {
          this.bookings = items;
          console.log(this.bookings);
          this.countBookings = this.bookings?.length as number;
        }
      }
    });
  }

  handlerRefunds(resp: RefundOutputDTOGenericResponseDTO) {
    return resp;
  }

  handlerBookings(resp: BookingOutputDTOGenericResponseDTO) {
    return resp;
  }

  onValChange(value: string){
    this.show = value;
  }
}
