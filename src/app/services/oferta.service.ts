import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Oferta } from "../shared/oferta.model";
import { Observable } from "rxjs";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertaService {

    constructor(private httpClient : HttpClient){}
    
    public getOfertas() : Promise<Array<Oferta>> {
        return this.httpClient.get("http://localhost:3000/ofertas")
            .toPromise()
            .then((resposta : any) => resposta);
    } 

    public getOfertasDestaque() : Promise<Array<Oferta>> {
        return this.httpClient.get("http://localhost:3000/ofertas?destaque=true")
            .toPromise()
            .then((resposta : any) => resposta);
    }
}