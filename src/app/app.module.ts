import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

import { AppComponent } from './app.component';
import { WeathertableComponent } from './weathertable/weathertable.component'; 
import { CityService } from './city.service';
import { WeatherService } from './weather.service';
import { GraphComponent } from './graph/graph.component';
import { NewtableComponent } from './newtable/newtable.component';

@NgModule({
  declarations: [
    AppComponent,
    WeathertableComponent,
    GraphComponent,
    NewtableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
    
  
  ],
  providers: [
    CityService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
