//Deveria ficar num módulo separado, mas a fim de estudo ficará aqui de forma mais simples.

import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { DiversaoComponent } from "./diversao/diversao.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { OfertaComponent } from "./oferta/oferta.component";

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "diversao", component: DiversaoComponent },
  { path: "restaurantes", component: RestaurantesComponent },
  { path: "oferta/:id", component: OfertaComponent}
];
