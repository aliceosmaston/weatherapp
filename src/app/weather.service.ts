//This service successfully retrieves data from the openweathermap API
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Temperature } from './models/temperature.model'
import { Observable } from 'rxjs/Observable'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  dailyForecast():Observable<Temperature[]> {
    return this._http.get<Temperature[]>("http://api.openweathermap.org/data/2.5/group?id=2653941,2654675,3688689,3936456,3911925,344979,232422,160263,1185241,1821306&units=metric&appid=194333f5b09188fbda8c4a3bbfea30b2")
      .map(result => result);
  }
}
