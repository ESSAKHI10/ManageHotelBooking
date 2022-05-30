import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTicketPlanComponent } from './add-ticket-plan.component';

describe('AddTicketPlanComponent', () => {
  let component: AddTicketPlanComponent;
  let fixture: ComponentFixture<AddTicketPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTicketPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTicketPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
