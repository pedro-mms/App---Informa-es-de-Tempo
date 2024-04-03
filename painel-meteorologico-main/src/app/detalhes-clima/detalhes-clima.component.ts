import { Component, Input } from '@angular/core';
import { WeatherData } from '../models/Weather';

@Component({
  selector: 'app-detalhes-clima',
  templateUrl: './detalhes-clima.component.html',
  styleUrls: ['./detalhes-clima.component.css']
})
export class DetalhesClimaComponent {

  @Input() clima: WeatherData | undefined;

}
