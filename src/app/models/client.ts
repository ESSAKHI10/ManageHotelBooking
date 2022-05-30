import { Stay } from './stay';
import { PlanTicket } from './plan-ticket';
export interface Client {
  id?: string;
  name?: string;
  adress?: string;
  ticketPlan?: PlanTicket[];
  // stay?: Stay[];
}
