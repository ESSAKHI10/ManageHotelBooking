import { AddHotelBookingComponent } from './../modals/add-hotel-booking/add-hotel-booking.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddClientComponent } from '../modals/add-client/add-client.component';
import { AddTicketPlanComponent } from '../modals/add-ticket-plan/add-ticket-plan.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
  open() {
    const modalRef = this.modalService.open(AddClientComponent, {
      centered: true,
    });
  }

  openAddticket() {
    const modalRef = this.modalService.open(AddTicketPlanComponent, {
      centered: true,
    });
  }
  openAddHotelBooking() {
    
  }
}
