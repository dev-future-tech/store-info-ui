import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Schedule } from '../_model';
import { StoreService } from '../_service/store.service';

@Component({
  selector: 'app-store-hours',
  templateUrl: './store-hours.component.html',
  styleUrls: ['./store-hours.component.css']
})
export class StoreHoursComponent implements OnInit {

  @Input("store-id")
  storeId = "";

  displayError = false;

  dataSource = new MatTableDataSource<Schedule>([]);
  columnNames = ['day', 'hours'];

  constructor(private service: StoreService) { }

  ngOnInit(): void {
    this.service.getStoreHours(this.storeId!)
    .subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (err) => this.displayError = true,
    });
  }

}
