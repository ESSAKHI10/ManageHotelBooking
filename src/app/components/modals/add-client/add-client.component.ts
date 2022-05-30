import { PlanTicketService } from './../../../services/planTicket/plan-ticket.service';
import { PlanTicket } from 'src/app/models/plan-ticket';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Client } from './../../../models/client';
import { ClientService } from './../../../services/client/client.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  @Input() public clientEdite?: Client;

  tikcetPlan?: PlanTicket[];
  dropdownList: any[] = [];
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};

  addClient?: Client | null = null;

  addClientForm: FormGroup = new FormGroup({
    name: new FormControl(),
    adress: new FormControl(),
    ticketPlan: new FormControl(this.selectedItems),
  });

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private ticketService: PlanTicketService
  ) {}

  ngOnInit(): void {
    console.log(this.clientEdite);
    if (this.clientEdite) {
      this.addClientForm = this.formBuilder.group({
        name: [this.clientEdite?.name, Validators.required],
        adress: [this.clientEdite?.adress, Validators.required],
        ticketPlan: [this.clientEdite?.ticketPlan, Validators.required],
      });
    } else {
      if (this.clientEdite) {
        this.addClientForm = this.formBuilder.group({
          name: ['', Validators.required],
          adress: ['', Validators.required],
          ticketPlan: [this.selectedItems, Validators.required],
        });
      }
    }
    //get all tickets :
    console.log('get all tikcet');
    this.ticketService.getplanTicketList().subscribe((res) => {
      this.dropdownList = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as PlanTicket;
      });
    });

    console.log(this.dropdownList);
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  submiteClient() {
    console.log(this.addClientForm.value);
    if (this.clientEdite?.id) {
      console.log('edite client');
      console.log(this.clientEdite?.id);
      console.log(this.addClientForm.value);
      this.clientService.updateClient(
        this.addClientForm.value,
        this.clientEdite?.id
      );
    } else {
      console.log('add client');
      console.log(this.addClientForm.value);

      this.clientService.createClient(this.addClientForm.value);
    }
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
