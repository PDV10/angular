import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CarritoService } from '../carrito.service';
import { Cubos } from '../cubos/Cubos';
import { DataCubosService } from '../data-cubos.service';

@Component({
  selector: 'app-filtro-cubos',
  templateUrl: './filtro-cubos.component.html',
  styleUrls: ['./filtro-cubos.component.css']
})
export class FiltroCubosComponent implements OnInit {

  cubos: Cubos[] = []; 
  cubosFiltrados: Cubos[] = [];                                         // arreglo que uso en el componente

  constructor(private activador: ActivatedRoute, private data: DataCubosService,private carrito: CarritoService ) {
    this.activador.params.subscribe(parametro =>{                     // obtengo los parametros que recibo por url
      this.data.getAll().subscribe( data => {                        // obtengo todos los cubos
        this.cubosFiltrados = [];                                   // vacio el arreglo si tiene algo 
        for (let i = 0; i < data.length; i++) {                    // recorro todos los cubos
          if(data[i].Categoria == parametro['categoria']){        // pregunto si algun cubo es del tipo de categoria que mando por parametro
            this.cubosFiltrados.push(data[i]);                   // pusheo al arreglo los cubos que cumplen
          }
        }
      })
    });
  }

  ngOnInit(): void {
  }

  agregarAlCarrito(cubo: Cubos): void{
    this.carrito.agregarAlCarrito(cubo);
    cubo.stock -= cubo.cantidad;
  }
}
