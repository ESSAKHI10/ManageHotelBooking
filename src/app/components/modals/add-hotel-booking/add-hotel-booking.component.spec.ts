import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHotelBookingComponent } from './add-hotel-booking.component';

describe('AddHotelBookingComponent', () => {
  let component: AddHotelBookingComponent;
  let fixture: ComponentFixture<AddHotelBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHotelBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHotelBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
