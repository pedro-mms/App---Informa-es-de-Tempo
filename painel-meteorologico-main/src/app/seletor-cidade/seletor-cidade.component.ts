import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClimaService } from '../services/clima-service';
import { Cidade } from '../models/Cidade';
import { WeatherData } from '../models/Weather';

@Component({
  selector: 'app-seletor-cidade',
  templateUrl: './seletor-cidade.component.html',
  styleUrls: ['./seletor-cidade.component.css']
})
export class SeletorCidadeComponent implements OnInit {
  selectedCity: number | undefined;
 weatherData: WeatherData | undefined;

 @Output() cidadeSelecionada = new EventEmitter<number>();
  cities: Cidade[] = [
    { id: 1, nome: "Aracaju", estado: "SE", latitude: 10.54, longitude: 37.04 },
    { id: 2, nome: "Belém", estado: "PA", latitude: 1.27, longitude: 48.30 },
    { id: 3, nome: "Belo Horizonte", estado: "MG", latitude: 19.55, longitude: 43.56 },
    { id: 4, nome: "Boa Vista", estado: "RR", latitude: 2.49, longitude: 60.40 },
    { id: 5, nome: "Brasília", estado: "DF", latitude: 15.46, longitude: 47.55 },
    { id: 6, nome: "Campo Grande", estado: "MS", latitude: 20.26, longitude: 54.38 },
    { id: 7, nome: "Cuiabá", estado: "MT", latitude: 15.35, longitude: 56.05 },
    { id: 8, nome: "Curitiba", estado: "PR", latitude: 25.25, longitude: 49.16 },
    { id: 9, nome: "Florianópolis", estado: "SC", latitude: 27.35, longitude: 48.32 },
    { id: 10, nome: "Fortaleza", estado: "CE", latitude: 3.43, longitude: 38.32 },
    { id: 11, nome: "Goiânia", estado: "GO", latitude: 16.40, longitude: 49.15 },
    { id: 12, nome: "João Pessoa", estado: "PB", latitude: 7.06, longitude: 34.51 },
    { id: 13, nome: "Macapá", estado: "AP", latitude: 0.02, longitude: 51.03 },
    { id: 14, nome: "Maceió", estado: "AL", latitude: 9.39, longitude: 35.44 },
    { id: 15, nome: "Manaus", estado: "AM", latitude: 3.06, longitude: 60.01 },
    { id: 16, nome: "Natal", estado: "RN", latitude: 5.47, longitude: 35.12 },
    { id: 17, nome: "Palmas", estado: "TO", latitude: 10.12, longitude: 48.21 },
    { id: 18, nome: "Porto Alegre", estado: "RS", latitude: 30.01, longitude: 51.13 },
    { id: 19, nome: "Porto Velho", estado: "RO", latitude: 8.45, longitude: 63.54 },
    { id: 20, nome: "Recife", estado: "PE", latitude: 8.03, longitude: 34.52 },
    { id: 21, nome: "Rio Branco", estado: "AC", latitude: 9.58, longitude: 67.48 },
    { id: 22, nome: "Rio de Janeiro", estado: "RJ", latitude: 22.54, longitude: 43.12 },
    { id: 23, nome: "Salvador", estado: "BA", latitude: 12.58, longitude: 38.30 },
    { id: 24, nome: "São Luís", estado: "MA", latitude: 2.31, longitude: 44.18 },
    { id: 25, nome: "São Paulo", estado: "SP", latitude: 23.32, longitude: 46.38 },
    { id: 26, nome: "Teresina", estado: "PI", latitude: 5.05, longitude: 42.48 },
    { id: 27, nome: "Vitória", estado: "ES", latitude: 20.19, longitude: 40.20 }
  ];

  constructor(private climaService: ClimaService) { }

 ngOnInit(): void {
 }

 buscarClima() {
    // Certifique-se de que selectedCity está definido antes de emitir
    if (this.selectedCity) {
      this.cidadeSelecionada.emit(this.selectedCity);
    }
 }

}
