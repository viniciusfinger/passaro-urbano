import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertaService } from '../services/oferta.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertaService]
})
export class DiversaoComponent implements OnInit {

  public ofertas : Array<Oferta>;

  constructor(private ofertaService : OfertaService) { }

  ngOnInit() {
    this.ofertaService.getOfertasPorCategoria('diversao')
      .then((ofertas : Array<Oferta>) => this.ofertas = ofertas)
      .catch((err : any) => console.log(err));
  }
}
