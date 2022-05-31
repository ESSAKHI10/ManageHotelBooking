import { HotelBookingComponent } from './components/home/hotelBooking/hotel-booking/hotel-booking.component';
import { ListPlanTicketComponent } from './components/home/planTicket/list-plan-ticket/list-plan-ticket.component';
import { PlanTicket } from './models/plan-ticket';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListClientComponent } from './components/home/client/list-client/list-client.component';
import { LandingPageComponent } from './components/home/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        outlet: '',
        component: LandingPageComponent,
      },
      {
        path: 'ticket-list',
        outlet: 'ticket-list',
        component: ListPlanTicketComponent,
      },
      {
        path: 'client-list',
        outlet: 'ticket-list',
        component: ListClientComponent,
      },
      {
        path: 'hotelBooking-list',
        outlet: 'ticket-list',
        component: HotelBookingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
