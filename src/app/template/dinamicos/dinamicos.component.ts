import { Component, OnInit } from '@angular/core';

interface Persona{

  nombre:string;
  favoritos:Favorito[];
}


interface Favorito{
  id: number;
  nombre:string;
}



@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})

export class DinamicosComponent {

  nuevoJuego : string = '';

  persona :Persona = {
    nombre: 'Mario',
    favoritos: [
      {id:1,nombre:'Silent hill'}, 
      {id:2,nombre:'LIMBO'},
    ]
  }

  guardar(){

    console.log('form posteado');
  }

  eliminar( index:number ){
    this.persona.favoritos.splice(index,1);
  }

  agregar(){

    const nuevoFavorito:Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push(nuevoFavorito);
    this.nuevoJuego = '';
  }

}
