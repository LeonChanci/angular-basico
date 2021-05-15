import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor', 'Capitan América '];
  heroesBorrados: string[] = [];
  heroeBorrado: string = '';

  
  borrarHeroe(): void{   
    //this.heroesBorrados[this.heroesBorrados.length] 
   // = this.heroes.shift() || '';

    //const heroeBorrado = this.heroes.shift() || '';
    //console.log(heroeBorrado);
    this.heroeBorrado = this.heroes.shift() || '';
    //console.log(this.heroeBorrado);
  }
}
