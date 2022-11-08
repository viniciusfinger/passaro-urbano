import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../services/oferta.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertaService]
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta>;

  constructor(private ofertaService : OfertaService) { }

  ngOnInit() {
    this.ofertaService.getOfertas()
      .then((ofertas : Array<Oferta>) => {this.ofertas = ofertas})
      .catch((err: any) => console.log(err));
  }
}
