import { TestBed } from '@angular/core/testing';

import { PlanTicketService } from './plan-ticket.service';

describe('PlanTicketService', () => {
  let service: PlanTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
