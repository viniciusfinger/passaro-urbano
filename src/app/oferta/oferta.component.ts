import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from '../services/oferta.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertaService],
})
export class OfertaComponent implements OnInit {

  public oferta : Oferta;

  constructor(private route : ActivatedRoute, private ofertaService : OfertaService) { }

  ngOnInit() {
    //snapshot pega o parametro da rota quando chamado
    console.log("id da rota pelo snapshot: " + this.route.snapshot.params['id']); 

    //subscribe pega o parametro da roda toda vez que alterado (programação reativa)
    //fica "assistindo" para ver se o array tem o valor modificado
    this.route.params.subscribe((parametros : any) => {
      console.log("id da rota pelo subscribe: " + parametros.id);
    })

    this.ofertaService.getOfertaPorId(this.route.snapshot.params['id'])
        .then((oferta : Oferta) => {this.oferta = oferta
        console.log(this.oferta);
        })
        .catch((err : any) => console.log(err));
  }
}
