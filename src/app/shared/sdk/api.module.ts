import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AccountService } from './api/account.service';
import { ActivitiesService } from './api/activities.service';
import { BoatsService } from './api/boats.service';
import { BookingService } from './api/booking.service';
import { ClientInvoiceService } from './api/clientInvoice.service';
import { MooringService } from './api/mooring.service';
import { OwnerInvoiceService } from './api/ownerInvoice.service';
import { PortService } from './api/port.service';
import { RefundsService } from './api/refunds.service';
import { ReviewsService } from './api/reviews.service';
import { ServicesService } from './api/services.service';
import { TechnicalServiceService } from './api/technicalService.service';
import { UsersService } from './api/users.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
