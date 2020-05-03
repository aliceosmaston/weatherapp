//Create interface used as an observable for fetching the weather data from the endpoint
//Used by weather.service.ts
export interface Temperature {
    name: string;
    id: number;
}