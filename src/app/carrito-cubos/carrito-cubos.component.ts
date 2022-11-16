import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarritoService } from '../carrito.service';
import { Cubos } from '../cubos/Cubos';

@Component({
  selector: 'app-carrito-cubos',
  templateUrl: './carrito-cubos.component.html',
  styleUrls: ['./carrito-cubos.component.css']
})

export class CarritoCubosComponent implements OnInit {

  ListaCarrito$: Observable<Cubos[]>; 
  
  constructor(private carrito: CarritoService) {
    this.ListaCarrito$ = carrito.ListaCarrito.asObservable(); 
   }

  ngOnInit(): void {
  }


  eliminar(cubo: Cubos): void{
    this.carrito.eliminar(cubo);
  }
}
