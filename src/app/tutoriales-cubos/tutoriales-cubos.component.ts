import { Component, OnInit } from '@angular/core';
import { Tutorial } from './tutoriales';

@Component({
  selector: 'app-tutoriales-cubos',
  templateUrl: './tutoriales-cubos.component.html',
  styleUrls: ['./tutoriales-cubos.component.css']
})
export class TutorialesCubosComponent implements OnInit {

  tutoriales: Tutorial [] = [
    {
      titulo: "Tutorial para armar cubo de rubik",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
