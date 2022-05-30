import { ConfirmationService, MessageService } from 'primeng/api';
import { AddHotelBookingComponent } from './../../../modals/add-hotel-booking/add-hotel-booking.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HotelBooking } from './../../../../models/hotel-booking';
import { Component, OnInit } from '@angular/core';
import { HotelBookingService } from 'src/app/services/hotel-booking/hotel-booking.service';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css'],
})
export class HotelBookingComponent implements OnInit {
  HotelBooking!: HotelBooking[];
  selectedHotelBooking?: HotelBooking[];
  hotelDialog?: boolean;
  constructor(
    private modalService: NgbModal,
    private servcieHotelBooking: HotelBookingService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.servcieHotelBooking.getHotelBookingList().subscribe((res) => {
      this.HotelBooking = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as HotelBooking;
      });
    });
  }

  editeTHotelBooking(hotelBooking: HotelBooking) {
    const modalRef = this.modalService.open(AddHotelBookingComponent, {
      centered: true,
    });
    modalRef.componentInstance.hotelBookingEdite = hotelBooking;
    modalRef.result.then(
      (yes) => {
        console.log('Ok Click');
      },
      (cancel) => {
        console.log('Cancel Click');
      }
    );
  }

  openNew() {
    const modalRef = this.modalService.open(AddHotelBookingComponent, {
      centered: true,
    });
  }

  deleteSelectedProducts() {}

  deleteHotelBooking(hotelBooking: HotelBooking) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.servcieHotelBooking.deleteHotelBooking(hotelBooking);
        this.selectedHotelBooking = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {}

  saveProduct() {}

  findIndexById(id: string): number {
    let index = -1;

    return index;
  }
}
