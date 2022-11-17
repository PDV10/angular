import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cubos } from './cubos/Cubos';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {
  private _ListaCarrito: Cubos [] =  [];
  ListaCarrito: BehaviorSubject<Cubos[]> = new BehaviorSubject(this._ListaCarrito);

  constructor() { }

  agregarAlCarrito(cubo: Cubos) {
    let item: Cubos | undefined= this._ListaCarrito.find((v1) => v1.Nombre == cubo.Nombre);
   
      if(!item ){
        this._ListaCarrito.push({... cubo});
      }else{
        item.cantidad += cubo.cantidad;
      }
      
      if(item?.cantidad != 0){
        this.ListaCarrito.next(this._ListaCarrito); //equivale al emmit de eventos
      }
  }

  eliminar(cubo: Cubos){
    let item: Cubos | undefined= this._ListaCarrito.find((v1) => v1.id == cubo.id);
    
    if(item ){
      for (let i = 0; i < this._ListaCarrito.length; i++) {
        if(this._ListaCarrito[i].id == cubo.id){
          this._ListaCarrito.splice(i,1);
        }
      }
    }

    console.log("elimino cubo con id: " + cubo.id );
  }
}

 