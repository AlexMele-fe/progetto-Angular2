import { Component, OnInit } from '@angular/core';
import { carrello } from './products.service';


@Component({
  selector: 'app-navbar',
  template: `

      <nav class="navbar navbar-expand navbar-light bg-light py-3 ">
      <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">

            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  [routerLink]="['/']"
                  routerLinkActive="Active"
                  [routerLinkActiveOptions]="{ exact: true }"
                  >Home</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  [routerLink]="['/cart']"
                  routerLinkActive="active"
                  >Carrello ( {{ lunghezzaCarrello.length }} )</a
                >
              </li>
            </ul>
          </div>
           </div>
      </nav>

  `,
  styles: [],
})
export class NavbarComponent implements OnInit {
  lunghezzaCarrello = carrello;

  constructor() {}

  ngOnInit(): void {}
}
