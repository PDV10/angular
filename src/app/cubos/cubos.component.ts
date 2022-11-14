import { Component, OnInit } from '@angular/core';
import { Cubos } from './Cubos';

@Component({
  selector: 'app-cubos',
  templateUrl: './cubos.component.html',
  styleUrls: ['./cubos.component.css']
})
export class CubosComponent implements OnInit {
 
  Cubos: Cubos[] = [
    {
      nombre: "2X2",
      stock: 10,
      precio: 2000,
      img: "../../assets/img/gan 2x2 stickerles 2.png"
    },
    {
      nombre: "3x3",
      stock: 10,
      precio: 4500,
      img: "../../assets/img/gan 3x3 stickerless.jpeg"
    },
    {
      nombre: "4x4",
      stock: 10,
      precio: 5000,
      img: "../../assets/img/gan 4x4.png"
    },
    {
      nombre: "Mirror",
      stock: 10,
      precio: 1700,
      img: "../../assets/img/gan mirror.png"
    },
    {
      nombre: "pyraminx",
      stock: 10,
      precio: 1950,
      img: "../../assets/img/piraminx.png"
    },
    {
      nombre: "megaminx",
      stock: 10,
      precio: 5500,
      img: "../../assets/img/megaminx.png"
    },
    {
      nombre: "skewb",
      stock: 10,
      precio: 1000,
      img: "../../assets/img/skewb.png"
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
