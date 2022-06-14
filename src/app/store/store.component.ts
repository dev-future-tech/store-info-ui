import { Component, OnInit } from '@angular/core';
import { StoreService } from '../_service/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
  }

  getStoreDetails(): void {
    this.storeService.getStoreHours('146aa413-f690-44da-92da-68df13af0448').subscribe({
      next: (data) => console.log(`Data is: ${JSON.stringify(data)}`),
      complete: () => console.log('Done')
    });

  }
}
