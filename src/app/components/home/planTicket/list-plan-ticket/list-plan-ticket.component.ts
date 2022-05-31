import { AddTicketPlanComponent } from './../../../modals/add-ticket-plan/add-ticket-plan.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlanTicket } from 'src/app/models/plan-ticket';
import { PlanTicketService } from 'src/app/services/planTicket/plan-ticket.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-plan-ticket',
  templateUrl: './list-plan-ticket.component.html',
  styleUrls: ['./list-plan-ticket.component.css'],
})
export class ListPlanTicketComponent implements OnInit {
  tikcetPlan!: PlanTicket[];

  selectedtikcetPlan?: PlanTicket[];
  PlanTicketDialog?: boolean;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor(
    private ticketService: PlanTicketService,
    private modalService: NgbModal,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    console.log('get all tikcet');
    this.ticketService.getplanTicketList().subscribe((res) => {
      this.tikcetPlan = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as PlanTicket;
      });
    });
  }

  editeTicket(planTicket: PlanTicket) {
    const modalRef = this.modalService.open(AddTicketPlanComponent, {
      centered: true,
    });
    modalRef.componentInstance.ticketEdite = planTicket;
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
    const modalRef = this.modalService.open(AddTicketPlanComponent, {
      centered: true,
    });
  }
  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (this.selectedtikcetPlan) {
          for (var tic of this.selectedtikcetPlan) {
            this.ticketService.deleteplanTicket(tic);
          }
        }

        this.selectedtikcetPlan = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000,
        });
      },
    });
  }
  deleteTicket(ticket: PlanTicket) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ticketService.deleteplanTicket(ticket);
        this.selectedtikcetPlan = [];
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
