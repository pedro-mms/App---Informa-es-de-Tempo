import { Component, OnInit } from '@angular/core';
import { ClimaService } from './services/clima-service';
import { WeatherData } from './models/Weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cidadeSelecionada: string = ''
  showWeatherComponents: boolean = false;
  service: any;
  clima: WeatherData | undefined;

  constructor(service: ClimaService) {
    this.service = service;
  }

  ngOnInit() {
    // Agora você pode usar this.climaService para chamar métodos do serviço
  }

 onCidadeSelecionada(cidade: any) {
    this.service.getClimaPorCidade(cidade).subscribe((c: WeatherData) => {
      this.clima = c;

      if (this.clima) {
        this.showWeatherComponents = true;
      }
    });
  } 
}
