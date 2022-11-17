import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CubosComponent } from './cubos/cubos.component';
import { CarritoCubosComponent } from './carrito-cubos/carrito-cubos.component';
import { RouterModule, Routes } from '@angular/router';
import { FiltroCubosComponent } from './filtro-cubos/filtro-cubos.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { HttpClientModule } from "@angular/common/http";
import { TutorialesCubosComponent } from './tutoriales-cubos/tutoriales-cubos.component';

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
  },
  {
    path: 'tutoriales',
    component: TutorialesCubosComponent,
  }
];


@NgModule({
  declarations: [
    AppComponent,
    CubosComponent,
    CarritoCubosComponent,
    FiltroCubosComponent,
    InputNumberComponent,
    TutorialesCubosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
