import { Component, OnInit } from '@angular/core';


interface menuItem{
  texto: string,
  ruta:string
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html'
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  templateMenu: menuItem[] = [
    {
      texto:'Básicos',
      ruta: './template/basicos'
    },
    {
      texto:'Dinámicos',
      ruta: './template/dinamicos'
    },
    {
      texto:'Switches',
      ruta: './template/switches'
    }
  ]


  reactiveMenu : menuItem[] = [
    {
      texto:'Básicos',
      ruta: './reactive/basicos'
    },
    {
      texto:'Dinámicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto:'Switches',
      ruta: './reactive/switches'
    }
  ]

}
