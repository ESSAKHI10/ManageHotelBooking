import { HotelBooking } from './../../../models/hotel-booking';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { HotelBookingService } from 'src/app/services/hotel-booking/hotel-booking.service';
import { Dayjs } from 'dayjs';

@Component({
  selector: 'app-add-hotel-booking',
  templateUrl: './add-hotel-booking.component.html',
  styleUrls: ['./add-hotel-booking.component.css'],
})
export class AddHotelBookingComponent implements OnInit {
  @Input() public hotelBookingEdite?: HotelBooking;
  selected?: { start: Date; end: Date };
  hotelBookForm: FormGroup = new FormGroup({
    roomNumber: new FormControl(),
    nombreNuit: new FormControl(),
    roomType: new FormControl(),
    smooking: new FormControl(),
    start: new FormControl(),
    end: new FormControl(),
  });
  constructor(
    private formBuilder: FormBuilder,
    private hotelbookingService: HotelBookingService
  ) {}

  ngOnInit(): void {
    if (this.hotelBookingEdite) {
      this.hotelBookForm = this.formBuilder.group({
        roomNumber: [this.hotelBookingEdite?.roomNumber, Validators.required],
        nombreNuit: [this.hotelBookingEdite?.nombreNuit, Validators.required],
        roomType: [this.hotelBookingEdite?.roomType, Validators.required],
        smooking: [this.hotelBookingEdite?.smooking, Validators.required],
        start: [this.hotelBookingEdite?.start, Validators.required],
        end: [this.hotelBookingEdite?.end, Validators.required],
      });
    }
  }
  addhotelBooking() {
    if (this.hotelBookingEdite?.id) {
      this.hotelbookingService.updateHotelBooking(
        this.hotelBookForm.value,
        this.hotelBookingEdite.id
      );
      this.hotelBookForm = this.formBuilder.group({
        roomNumber: ['', Validators.required],
        nombreNuit: ['', Validators.required],
        roomType: ['', Validators.required],
        smooking: ['', Validators.required],
        start: ['', Validators.required],
        end: ['', Validators.required],
      });
    } else {
      console.log(this.hotelBookForm.value);
      this.hotelbookingService.createHotelBooking(this.hotelBookForm.value);
      this.hotelBookForm = this.formBuilder.group({
        roomNumber: ['', Validators.required],
        nombreNuit: ['', Validators.required],
        roomType: ['', Validators.required],
        smooking: ['', Validators.required],
        start: ['', Validators.required],
        end: ['', Validators.required],
      });
    }
  }
}
