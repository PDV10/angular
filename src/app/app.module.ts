import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CubosComponent } from './cubos/cubos.component';
import { CarritoCubosComponent } from './carrito-cubos/carrito-cubos.component';
import { RouterModule, Routes } from '@angular/router';
import { FiltroCubosComponent } from './filtro-cubos/filtro-cubos.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  { path: "",
    redirectTo: 'cubos',
    pathMatch: 'full',
  },
  {
    path: 'cubos',
    component: CubosComponent,
  },
  {
    path: 'carrito',
    component: CarritoCubosComponent,
  },
  {
    path: 'filtrado/:categoria',
    component: FiltroCubosComponent,
  }
];


@NgModule({
  declarations: [
    AppComponent,
    CubosComponent,
    CarritoCubosComponent,
    FiltroCubosComponent,
    InputNumberComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
