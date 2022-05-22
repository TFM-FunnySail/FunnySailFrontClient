import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalHistoryCardComponent } from './rental-history-card.component';

describe('RentalHistoryCardComponent', () => {
  let component: RentalHistoryCardComponent;
  let fixture: ComponentFixture<RentalHistoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalHistoryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalHistoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
