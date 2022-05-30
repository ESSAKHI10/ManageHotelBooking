import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PlanTicket } from 'src/app/models/plan-ticket';

@Injectable({
  providedIn: 'root',
})
export class PlanTicketService {
  constructor(private angularFirestore: AngularFirestore) {}

  getClinetId(id: any) {
    return this.angularFirestore
      .collection('planTicket-collection')
      .doc(id)
      .valueChanges();
  }
  getplanTicketList() {
    return this.angularFirestore
      .collection('planTicket-collection')
      .snapshotChanges();
  }
  createplanTicket(planTicket: PlanTicket) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('planTicket-collection')
        .add(planTicket)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  deleteplanTicket(planTicket: PlanTicket) {
    return this.angularFirestore
      .collection('planTicket-collection')
      .doc(planTicket?.id)
      .delete();
  }

  updateplanTicket(planTicket: PlanTicket, id: any) {
    return this.angularFirestore
      .collection('planTicket-collection')
      .doc(id)
      .update({
        name: planTicket.name,
      });
  }
}
