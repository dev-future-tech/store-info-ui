import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { Store } from '../_model';
import { StoreService } from '../_service/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @Input('store-id')
  storeId = "";

  displayError = false;

  store: Store = {
    store_id: '',
    name: '',
    phone_no: ''
  };

  constructor(private storeService: StoreService) {
    }

  ngOnInit(): void {
    this.storeService.getStore(this.storeId)
    .subscribe({
      next: (store) => this.store = store,
      error: (err) => this.displayError = true,
      complete: () => console.log('Done')
    });  
  }

}
