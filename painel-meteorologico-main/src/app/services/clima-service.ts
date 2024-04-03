import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeatherData } from '../models/Weather';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  private apiKey = '5cd21ddbadc55bf1aaa5b85ac116721a'; // Substitua pela sua chave de API do OpenWeatherMap

  constructor(private http: HttpClient) { }

  getClimaPorCidade(nomeCidade: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&appid=${this.apiKey}`;
    return this.http.get<WeatherData>(url);
  }
}
