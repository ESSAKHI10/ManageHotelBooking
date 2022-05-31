import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './components/home/client/client.component';
import { ListClientComponent } from './components/home/client/list-client/list-client.component';
import { HomeComponent } from './components/home/home.component';
import { AddClientComponent } from './components/modals/add-client/add-client.component';
import { AddTicketPlanComponent } from './components/modals/add-ticket-plan/add-ticket-plan.component';
import { AddHotelBookingComponent } from './components/modals/add-hotel-booking/add-hotel-booking.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { ListPlanTicketComponent } from './components/home/planTicket/list-plan-ticket/list-plan-ticket.component';
import { HotelBookingComponent } from './components/home/hotelBooking/hotel-booking/hotel-booking.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './components/home/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent,
    AddClientComponent,
    ListClientComponent,
    AddTicketPlanComponent,
    AddHotelBookingComponent,
    ListPlanTicketComponent,
    HotelBookingComponent,
    LandingPageComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,

    //primeface
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
