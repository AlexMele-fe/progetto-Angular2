import { Component, OnInit } from '@angular/core';

import * as Servizi from '../products.service';
import { Articolo } from '../models/product';
import { HttpClient } from '@angular/common/http';
@Component({
  template: `
    <p *ngIf ='isLoading'>loading</p>
    <div class="d-flex justify-content-evenly ">
          <div class="row text-center">
    <div class="col-sm-4" *ngFor="let articolo of articoliNegozio">
      <h5 class="card-header">{{articolo.id}}</h5>
      <div class="card-body">
        <h5 class="card-title">{{articolo.name}}</h5>
        <p class="card-text">{{articolo.description}} <br> <b>{{articolo.price | currency : 'EUR'}}</b></p>
        <button type="button" class="btn btn-dark" [routerLink]="['./product-card', articolo]">Dettagli</button>
      </div>
</div>
          </div>
  `,
  styles: [],
})
export class ProductListPage implements OnInit {
  articoliNegozio: Articolo[]=[];

  isLoading = false;



  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.isLoading = true;
    setInterval(()=>{
      if(this.articoliNegozio!=[]){
        this.isLoading=false;
      }
      this.articoliNegozio=Servizi.articoli;
    },20)
  }

}
