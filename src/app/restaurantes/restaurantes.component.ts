import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../services/oferta.service';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers : [OfertaService]
})
export class RestaurantesComponent implements OnInit {

  public ofertas : Array<Oferta>;

  constructor(private ofertaService : OfertaService) { }

  ngOnInit() {
    this.ofertaService.getOfertasPorCategoria('restaurante')
      .then((ofertas : Array<Oferta>) => this.ofertas = ofertas)
      .catch((err: any) => console.log(err));
  }
}
