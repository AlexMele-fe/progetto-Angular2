import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Articolo } from '../models/product';
import * as Servizi from '../products.service';
@Component({
  template: `
    <div class="card">
      <div *ngIf="articolo" class="card-body rounded text-center">
        <h5 class="card-title">{{ articolo.name }}</h5>
        <p class="card-text">
          {{ articolo.description }} <br />
          {{ articolo.price | currency: 'EUR' }}
        </p>
        <div class="card-footer mt-5">
          <button type="button" class="btn btn-dark m-1" (click)="aggiungi()">
            Aggiungi al carrello
          </button>
          <button type="button" class="btn btn-dark m-1" [routerLink]="['/']">
            Torna al negozio
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [ ],
})
export class ProductCardPage implements OnInit {
  articolo!: Articolo;
  sub!: Subscription;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params: Params) => {
      this.articolo = <Articolo>params;
      console.log(this.articolo);
      console.log(params);
    });
  }

  aggiungi() {
    Servizi.aggiungiAlCarrello(this.articolo);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
