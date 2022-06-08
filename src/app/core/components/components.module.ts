import { NgModule } from '@angular/core';
import { FooterModule } from "./footer/footer.module";
import { HeaderModule } from "./header/header.module";
import { RentalHistoryCardModule } from "./rental-history-card/rental-history-card.module";
import {CarouselModule} from "./carousel/carousel.module";
import {CommentModule} from "./comment/comment.module";
import {CardMenuModule} from "./card-menu/card-menu.module";
import {ChangePasswordCardModule} from "./change-password-card/change-password-card.module";
import {RefundsModule} from "./refunds/refunds.module";
import {LoadingModule} from "./loading/loading.module";

@NgModule({
  imports: [
    FooterModule,
    HeaderModule,
    RentalHistoryCardModule,
    CarouselModule,
    CommentModule,
    CardMenuModule,
    ChangePasswordCardModule,
    RefundsModule,
    LoadingModule
  ],
  exports: [
    FooterModule,
    HeaderModule,
    RentalHistoryCardModule,
    CarouselModule,
    CommentModule,
    CardMenuModule,
    ChangePasswordCardModule,
    RefundsModule,
    LoadingModule
  ]
})
export class ComponentsModule {
}
