import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersBoatCardComponent } from './users-boat-card.component';

describe('UsersBoatCardComponent', () => {
  let component: UsersBoatCardComponent;
  let fixture: ComponentFixture<UsersBoatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersBoatCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersBoatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
