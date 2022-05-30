import {Component, Input, OnInit} from '@angular/core';
import {
  ActivityBookingOutputDTO,
  BoatBookingOutputDTO,
  BookingOutputDTO, ServiceBookingOutputDTO
} from "../../../../shared/sdk";

@Component({
  selector: 'app-rental-history-card',
  templateUrl: './rental-history-card.component.html',
  styleUrls: ['./rental-history-card.component.scss']
})
export class RentalHistoryCardComponent implements OnInit {

  @Input() booking?: BookingOutputDTO;

  name: string = 'Booking';
  createdDate: string = 'create Date';
  entryDate: string = 'entry Date';
  departureDate: string = 'departure Date';
  status: string = 'status';
  paid: string = 'paid';
  boatBookings: Array<BoatBookingOutputDTO> = [];
  serviceBookings: Array<ServiceBookingOutputDTO> = [];
  activityBookings: Array<ActivityBookingOutputDTO> = [];
  total: number = 0;

  constructor() {
    this.name += this.booking?.id as unknown as string;
    this.createdDate = this.booking?.createdDate as string;
    this.entryDate = this.booking?.entryDate as string;
    this.departureDate = this.booking?.departureDate as string;
    this.status = this.booking?.status as string;
    this.paid = this.booking?.paid ? 'yes' : 'no';
    this.boatBookings = this.booking?.boatBookings as Array<BoatBookingOutputDTO>;
    this.serviceBookings = this.booking?.serviceBookings as Array<ServiceBookingOutputDTO>;
    this.activityBookings = this.booking?.activyBookings as Array<ActivityBookingOutputDTO>;

    this.boatBookings?.forEach(x => this.total += x.price as number);
    this.activityBookings?.forEach(x => this.total += x.price as number);
    this.serviceBookings?.forEach(x => this.total += x.price as number);
  }

  ngOnInit(): void {
  }

}
