import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './models/city.model'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class CityService {

    //Failure to import data using openweathermap API so used this fake  API for purposes of making a sortaable table with configurable pagination and a search filter
    private serviceUrl = "https://jsonplaceholder.typicode.com/users";

    constructor(private http: HttpClient) { }

    getCity(): Observable<City[]> {
        return this.http.get<City[]>(this.serviceUrl)
    }
}
