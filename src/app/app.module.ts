import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { CartPage } from './pages/cart.page';
import {ProductListPage } from './pages/product-list.page';
import { NavbarComponent } from './navbar.component';
import { ProductCardPage } from './pages/product-card.page';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes: Route[] = [
  {
    path: '',
    component: ProductListPage,
  },
  {
    path: 'product-card',
    component: ProductCardPage,
  },
  { path: 'cart', component: CartPage },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListPage,
    ProductCardPage,
    CartPage,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
