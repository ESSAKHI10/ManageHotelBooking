import { HotelBooking } from './../../models/hotel-booking';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HotelBookingService {
  constructor(private angularFirestore: AngularFirestore) {}

  getHotelBookingId(id: any) {
    return this.angularFirestore
      .collection('hotelBooking-collection')
      .doc(id)
      .valueChanges();
  }
  getHotelBookingList() {
    return this.angularFirestore
      .collection('hotelBooking-collection')
      .snapshotChanges();
  }
  createHotelBooking(hotelBooking: HotelBooking) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('hotelBooking-collection')
        .add(hotelBooking)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  deleteHotelBooking(hotelBooking: HotelBooking) {
    return this.angularFirestore
      .collection('hotelBooking-collection')
      .doc(hotelBooking?.id)
      .delete();
  }

  updateHotelBooking(hotelBooking: HotelBooking, id: any) {
    return this.angularFirestore
      .collection('hotelBooking-collection')
      .doc(id)
      .update({
        roomNumber: hotelBooking.roomNumber,
        start: hotelBooking.start,
        end: hotelBooking.end,
        nombreNuit: hotelBooking.nombreNuit,
        roomType: hotelBooking.roomType,
        smooking: hotelBooking.smooking,
      });
  }
}
