import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Client } from 'src/app/models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private angularFirestore: AngularFirestore) {}

  getClinetId(id: any) {
    return this.angularFirestore
      .collection('client-collection')
      .doc(id)
      .valueChanges();
  }
  getClientList() {
    return this.angularFirestore
      .collection('client-collection')
      .snapshotChanges();
  }
  createClient(client: Client) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('client-collection')
        .add(client)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  deleteClient(client: Client) {
    return this.angularFirestore
      .collection('client-collection')
      .doc(client?.id)
      .delete();
  }

  updateClient(client: Client, id: any) {
    return this.angularFirestore
      .collection('client-collection')
      .doc(id)
      .update({
        name: client.name,
        adress: client.adress,
      });
  }
}
