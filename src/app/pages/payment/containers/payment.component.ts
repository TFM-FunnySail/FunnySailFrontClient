import { Component, OnInit } from '@angular/core';
import {BookingOutputDTO, BookingService} from "../../../shared/sdk";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {StorageService} from "../../../shared/services/storage/storage.service";

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  loading = true;
  form: any;
  booking: BookingOutputDTO = {};
  bookingId: string = 'adsdsaasd';
  dateNow: string = 'sdasadsad';
  totalPrice: string = 'asdas';
  constructor(private bookingService: BookingService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private storageService: StorageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parameters => {
      this.bookingId = parameters['id'] as string;
      if (this.bookingId) {
        this.bookingService.apiBookingIdGet(parseInt(this.bookingId)).subscribe(resp => {
            console.log(resp);
            if (resp) {
              this.booking = resp;
              this.bookingId = resp.id as unknown as string;
              this.dateNow = Date.now().toString();
              this.totalPrice = resp.clientInvoiceLine?.totalAmount as unknown as string;
            }
          }
        );
      }
      this.loading = false;
    });

    this.form = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(19), Validators.pattern(/\d+/)]],
      cardExpirationMonth: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern(/\d+/)]],
      cardExpirationYear: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern(/\d+/)]],
      cardCvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern(/\d+/)]],
      paymentMethod: ['', Validators.required]
    });
  }

  Pay(){
    console.log(this.form);
    if(this.form.valid) {
      this.bookingService.apiBookingIdPayPut(parseInt(this.bookingId)).subscribe(
        res => {
          this.router.navigate(['/refunds-booking']);
          this.storageService.deleteItem('bookingCart');
          console.log('HTTP response', res)
        },
        err => console.log('HTTP Error', err),
        () => console.log('HTTP request completed.')
      );
    }
  }

  Cancel(){
     this.router.navigate(['/booking']);
  }
}
