
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-newtable',
  templateUrl: './newtable.component.html',
  styleUrls: ['./newtable.component.css']
})
export class NewtableComponent implements OnInit {

  constructor(private _weather: WeatherService) { }

  dataSource;
  displayedColumns = ['id', 'name'];

//Failed to return data from open weather API
  ngOnInit() {
    this._weather.dailyForecast()
    .subscribe(res => {
      let id = res['list'].map(res => res.id);
      let name =  res['list'].map(res => res.name);
      console.log(res)
    if(!res) {
      return;
    }
      this.dataSource = new MatTableDataSource(res);
    })
  }

}
