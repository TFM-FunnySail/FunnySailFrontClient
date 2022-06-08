import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {
  ActivityBookingOutputDTO,
  BoatBookingOutputDTO,
  BookingOutputDTO, BookingService, ServiceBookingOutputDTO
} from "../../../../shared/sdk";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rental-history-card',
  templateUrl: './rental-history-card.component.html',
  styleUrls: ['./rental-history-card.component.scss']
})
export class RentalHistoryCardComponent implements OnInit {

  @Input() booking: BookingOutputDTO = {};
  @ViewChild('closeModal') closeAddExpenseModal: ElementRef | undefined;
  name: string = 'Booking ';
  createdDate: string = 'create Date';
  entryDate: string = 'entry Date';
  departureDate: string = 'departure Date';
  status: string = 'status';
  paid: string = 'paid';
  boatBookings: Array<BoatBookingOutputDTO> = [];
  serviceBookings: Array<ServiceBookingOutputDTO> = [];
  activityBookings: Array<ActivityBookingOutputDTO> = [];
  total: number = 0;
  id: string = '';

  constructor(private bookingService: BookingService, private router: Router) {
    //data-bs-target
  }

  ngOnInit(): void {
    this.id = this.makeid();
    console.log(this.booking);
    this.name += this.booking?.id as unknown as string;
    this.createdDate = this.booking?.createdDate as string;
    this.entryDate = this.booking?.entryDate as string;
    this.departureDate = this.booking?.departureDate as string;
    this.status = this.booking?.status as string;
    this.paid = this.booking?.paid ? 'yes' : 'no';
    this.boatBookings = this.booking?.boatBookings as Array<BoatBookingOutputDTO>;
    this.serviceBookings = this.booking?.serviceBookings as Array<ServiceBookingOutputDTO>;
    this.activityBookings = this.booking?.activyBookings as Array<ActivityBookingOutputDTO>;
    console.log(this.name);
    this.boatBookings?.forEach(x => this.total += x.price as number);
    this.activityBookings?.forEach(x => this.total += x.price as number);
    this.serviceBookings?.forEach(x => this.total += x.price as number);
  }

  cancelBooking(){
    if(this.booking && this.booking.id) {
      const id = this.booking.id;
      this.bookingService.apiBookingIdCancelPut(id).subscribe(
        res => console.log('HTTP response', res),
        err => console.log('HTTP Error', err),
        () => console.log('HTTP request completed.')
      )
    }
  }

  makeid() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  showBilling(){
      this.closeAddExpenseModal?.nativeElement.click();
      this.router.navigate(['/billing/' + this.booking?.clientInvoiceLine?.clientInvoiceId ]);
  }
}
