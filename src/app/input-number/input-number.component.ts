import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {
 
  constructor() { }

  @Input()
  cantidad!: number;

  @Input()
  stock!: number;
  
  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  descontarCant(): void{
    if(this.cantidad > 1){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    } 
  }

  aumentarCant(): void{
    if(this.cantidad < this.stock){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
  }

 /*  OnChange(e: Event, Cubo:Cubos): void{
    if(Cubo.cantidad > 0){

    }  
    e.preventDefault();
  } */

}
