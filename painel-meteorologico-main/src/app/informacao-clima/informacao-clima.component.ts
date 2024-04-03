import { Component, Input } from '@angular/core';
import { WeatherData } from '../models/Weather';

@Component({
  selector: 'app-informacao-clima',
  templateUrl: './informacao-clima.component.html',
  styleUrls: ['./informacao-clima.component.css']
})
export class InformacaoClimaComponent {

  @Input() clima: WeatherData | undefined;

  showDetalhes: boolean = false; // Adicione esta linha para controlar a exibição dos detalhes

 constructor() {}

 // Adicione este método para controlar a exibição dos detalhes
 mostrarDetalhes() {
    this.showDetalhes = true;
 }

}
