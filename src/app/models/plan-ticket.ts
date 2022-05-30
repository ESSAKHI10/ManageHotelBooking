export interface PlanTicket {
  id: string;

  name: string;
  depart: string;
  arrive: string;
  start: Date;
  end: Date;
  prix: number;
  categorie: string;
}
