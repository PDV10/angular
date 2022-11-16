import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { DataCubosService } from '../data-cubos.service';
import { Cubos } from './Cubos';

@Component({
  selector: 'app-cubos',
  templateUrl: './cubos.component.html',
  styleUrls: ['./cubos.component.css']
})
export class CubosComponent implements OnInit {
 
  Cubos: Cubos[] = [];

  constructor(private carrito: CarritoService, private data: DataCubosService) { }
  
  ngOnInit(): void {
    this.data.getAll().subscribe( c => this.Cubos = c); 
  }
  
    agregarAlCarrito(cubo: Cubos): void{
      this.carrito.agregarAlCarrito(cubo);
      cubo.stock -= cubo.cantidad;
    }
}
