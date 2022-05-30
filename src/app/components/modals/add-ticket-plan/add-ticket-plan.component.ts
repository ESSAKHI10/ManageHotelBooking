import { PlanTicket } from 'src/app/models/plan-ticket';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PlanTicketService } from 'src/app/services/planTicket/plan-ticket.service';

@Component({
  selector: 'app-add-ticket-plan',
  templateUrl: './add-ticket-plan.component.html',
  styleUrls: ['./add-ticket-plan.component.css'],
})
export class AddTicketPlanComponent implements OnInit {
  cities = [
    { value: 'AIN CHOCK', label: 'AIN CHOCK' },
    { value: 'HOCEIMA', label: 'HOCEIMA' },
    { value: 'AOUSSERD', label: 'AOUSSERD' },
    { value: 'ASSA ZAG', label: 'ASSA ZAG' },
    { value: 'AZILAL', label: 'AZILAL' },
    { value: "BEN M'SIK SvalueI OTHMANE", label: "BEN M'SIK SvalueI OTHMANE" },
    { value: 'BENI MEKADA', label: 'BENI MEKADA' },
    { value: 'BENI MELLAL', label: 'BENI MELLAL' },
    { value: 'BENSLIMANE', label: 'BENSLIMANE' },
    { value: 'BERKANE', label: 'BERKANE' },
    { value: 'BERRECHvalue', label: 'BERRECHvalue' },
    { value: 'BOUJDOUR', label: 'BOUJDOUR' },
    { value: 'BOULEMANE', label: 'BOULEMANE' },
    { value: 'CASABLANCA', label: 'CASABLANCA' },
    { value: 'CASABLANCA ANFA', label: 'CASABLANCA ANFA' },
    { value: 'CHEFCHAOUEN', label: 'CHEFCHAOUEN' },
    { value: 'CHICHAOUA', label: 'CHICHAOUA' },
    { value: 'CHTOUKA AIT BAHA', label: 'CHTOUKA AIT BAHA' },
    { value: 'DAKHLA', label: 'DAKHLA' },
    { value: 'DERB SOLTANE-AL FvalueA', label: 'DERB SOLTANE-AL FvalueA' },
    { value: 'DRIOUCH', label: 'DRIOUCH' },
    { value: 'EL HAJEB', label: 'EL HAJEB' },
    { value: 'EL HAOUZ', label: 'EL HAOUZ' },
    { value: 'EL KALAA DES SRAGHNAS', label: 'EL KALAA DES SRAGHNAS' },
    { value: 'EL KELAA DES SRAGHNA', label: 'EL KELAA DES SRAGHNA' },
    { value: 'ELJADvalueA', label: 'ELJADvalueA' },
    { value: 'ERRACHvalueIA', label: 'ERRACHvalueIA' },
    { value: 'ESSAOUIRA', label: 'ESSAOUIRA' },
    { value: 'ESSEMARA', label: 'ESSEMARA' },
    { value: 'FAHS ANJRA', label: 'FAHS ANJRA' },
    { value: 'FES', label: 'FES' },
    { value: 'FIGUIG', label: 'FIGUIG' },
    { value: 'FQUIH BEN SALAH', label: 'FQUIH BEN SALAH' },
    { value: 'GUELMIM', label: 'GUELMIM' },
    { value: 'GUERCIF', label: 'GUERCIF' },
    { value: 'HAY HASSANI', label: 'HAY HASSANI' },
    { value: 'HAY MOHAMMADI AIN SEBAA', label: 'HAY MOHAMMADI AIN SEBAA' },
    { value: 'IFRANE', label: 'IFRANE' },
    { value: 'INEZGANE AIT MELLOUL', label: 'INEZGANE AIT MELLOUL' },
    { value: 'JERADA', label: 'JERADA' },
    { value: 'KENITRA', label: 'KENITRA' },
    { value: 'KHEMISSET', label: 'KHEMISSET' },
    { value: 'KHENIFRA', label: 'KHENIFRA' },
    { value: 'KHOURIBGA', label: 'KHOURIBGA' },
    { value: 'LAAYOUNE', label: 'LAAYOUNE' },
    { value: 'LARACHE', label: 'LARACHE' },
    { value: 'MARRAKECH', label: 'MARRAKECH' },
    { value: 'MDIQ FNvalueQ', label: 'MDIQ FNvalueQ' },
    { value: 'MEDIOUNA', label: 'MEDIOUNA' },
    { value: 'MEKNES', label: 'MEKNES' },
    { value: 'MvalueELT', label: 'MvalueELT' },
    { value: 'MOHAMMADIA', label: 'MOHAMMADIA' },
    { value: 'MOHAMMADIA ZENATA', label: 'MOHAMMADIA ZENATA' },
    { value: 'MOULAY RACHvalue', label: 'MOULAY RACHvalue' },
    { value: 'MOULAY YACOUB', label: 'MOULAY YACOUB' },
    { value: 'NADOR', label: 'NADOR' },
    { value: '57', label: 'NOUACEUR' },
    { value: 'NOUACEUR', label: 'OUARZAZATE' },
    { value: 'OUAZZANE', label: 'OUAZZANE' },
    { value: 'OUED DAHAB', label: 'OUED DAHAB' },
    { value: 'OUJDA', label: 'OUJDA' },
    { value: 'RABAT', label: 'RABAT' },
    { value: 'REHAMNA', label: 'REHAMNA' },
    { value: 'SAFI', label: 'SAFI' },
    { value: 'SALE', label: 'SALE' },
    { value: 'SEFROU', label: 'SEFROU' },
    { value: 'SETTAT', label: 'SETTAT' },
    { value: 'SvalueI BENNOUR', label: 'SvalueI BENNOUR' },
    { value: 'SvalueI BERNOUSSI', label: 'SvalueI BERNOUSSI' },
    { value: 'SvalueI IFNI', label: 'SvalueI IFNI' },
    { value: 'SvalueI KACE', label: 'SvalueI KACEM' },
    { value: 'valueI SLIMANE', label: 'SvalueI SLIMANE' },
    { value: 'SKHIRATE TEMARA', label: 'SKHIRATE TEMARA' },
    { value: 'TANGER ASSILAH', label: 'TANGER ASSILAH' },
    { value: 'TANTAN', label: 'TANTAN' },
    { value: 'TAOUNATE', label: 'TAOUNATE' },
    { value: 'TAOURIRT', label: 'TAOURIRT' },
    { value: 'TARFAYA', label: 'TARFAYA' },
    { value: 'TAROUDANT', label: 'TAROUDANT' },
    { value: 'TATA', label: 'TATA' },
    { value: 'TAZA', label: 'TAZA' },
    { value: 'TETOUAN', label: 'TETOUAN' },
    { value: 'TINGHIR', label: 'TINGHIR' },
    { value: 'TIZNIT', label: 'TIZNIT' },
    { value: 'YOUSSOUFIA', label: 'YOUSSOUFIA' },
    { value: 'ZAGORA', label: 'ZAGORA' },
    { value: 'AGADIR', label: 'AGADIR' },
  ];

  @Input() public ticketEdite?: PlanTicket;
  ticketForm: FormGroup = new FormGroup({
    depart: new FormControl(),
    arrive: new FormControl(),
    name: new FormControl(),
    prix: new FormControl(),
    categorie: new FormControl(),
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(
    private formBuilder: FormBuilder,
    private ticketService: PlanTicketService
  ) {}

  ngOnInit(): void {
    if (this.ticketEdite) {
      this.ticketForm = this.formBuilder.group({
        depart: [this.ticketEdite?.depart, Validators.required],
        arrive: [this.ticketEdite?.arrive, Validators.required],
        prix: [this.ticketEdite?.prix, Validators.required],
        categorie: [this.ticketEdite?.categorie, Validators.required],
        name: [this.ticketEdite?.name, Validators.required],
        start: [this.ticketEdite?.start, Validators.required],
        end: [this.ticketEdite?.end, Validators.required],
      });
    }
  }

  addticketPlan() {
    console.log('add ticket');
    if (this.ticketEdite?.id) {
      this.ticketService.updateplanTicket(
        this.ticketForm.value,
        this.ticketEdite?.id
      );
      this.ticketForm = this.formBuilder.group({
        depart: ['', Validators.required],
        arrive: ['', Validators.required],
        prix: ['', Validators.required],
        categorie: ['', Validators.required],
        name: ['', Validators.required],
        start: ['', Validators.required],
        end: ['', Validators.required],
      });
    } else {
      this.ticketService.createplanTicket(this.ticketForm.value);
      this.ticketForm = this.formBuilder.group({
        depart: ['', Validators.required],
        arrive: ['', Validators.required],
        prix: ['', Validators.required],
        categorie: ['', Validators.required],
        name: ['', Validators.required],
        start: ['', Validators.required],
        end: ['', Validators.required],
      });
    }
  }
}
