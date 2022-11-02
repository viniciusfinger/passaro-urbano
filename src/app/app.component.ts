import { Component, OnInit } from '@angular/core';
import { OfertaService } from './services/oferta.service';

@Component({
  selector: 'xyz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OfertaService]
})
export class AppComponent implements OnInit {
  title = 'passaro-urbano';

  constructor(private ofertaService : OfertaService){}

  ngOnInit(){
    
  }
}
