import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanTicketComponent } from './list-plan-ticket.component';

describe('ListPlanTicketComponent', () => {
  let component: ListPlanTicketComponent;
  let fixture: ComponentFixture<ListPlanTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlanTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlanTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
