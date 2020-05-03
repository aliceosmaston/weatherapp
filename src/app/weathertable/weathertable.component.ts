import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CityService } from '../city.service';
  
//This component successfully creates a sortable table with configurable pagination however it uses a fake API 

@Component({
  selector: 'weathertable',
  templateUrl: './weathertable.component.html',
  styleUrls: ['./weathertable.component.css']
  })
  export class WeathertableComponent implements OnInit {
  
  dataSource;
  displayedColumns = ['name', 'username', 'email'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(private cityService: CityService) { }
  
  ngOnInit() {
  this.cityService.getCity().subscribe(results => {
  if(!results) {
  return;
  }
  this.dataSource = new MatTableDataSource(results);
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
  })
  }

  applySearch(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = searchValue.trim().toLowerCase()
  }
  }
  

