import { Component, OnInit } from '@angular/core';
import * as Servizi from './products.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'progetto';

constructor(public http: HttpClient) { }

ngOnInit(): void {
  Servizi.loadArticoli(this.http);
}
}

