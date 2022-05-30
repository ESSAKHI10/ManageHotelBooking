import { AddClientComponent } from './../../../modals/add-client/add-client.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from './../../../../services/client/client.service';
import { Client } from 'src/app/models/client';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css'],
})
export class ListClientComponent implements OnInit {
  Clients!: Client[];
  selectedClient?: Client[];
  ClientDialog?: boolean;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    private clientService: ClientService,
    private modalService: NgbModal,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    console.log('get all client');
    this.clientService.getClientList().subscribe((res) => {
      this.Clients = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Client;
      });
    });

    console.log(this.Clients);
  }
  removeClient(client: Client) {
    this.clientService.deleteClient(client);
  }

  editeClient(client: Client) {
    const modalRef = this.modalService.open(AddClientComponent, {
      centered: true,
    });
    modalRef.componentInstance.clientEdite = client;
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
    const modalRef = this.modalService.open(AddClientComponent, {
      centered: true,
    });
  }
  deleteSelectedClient() {}
  deleteClient(client: Client) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.clientService.deleteClient(client);
        this.selectedClient = [];
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
}
