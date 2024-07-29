import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Schedule, Store } from '../_model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  headers = new HttpHeaders().set("x-api-version", "v1");
  constructor(private http: HttpClient) { }

  getStoreParallel(storeId: string) : Observable<any> {

    return forkJoin({
      store: this.getStore(storeId),
      hours: this.getStoreHours(storeId)
    });
  }

  getStore(storeId: string) : Observable<Partial<Store>> {
    
    return this.http.get<Store>(`http://localhost:4200/stores/store/${storeId}`, { headers: this.headers });
  }

  getStoreHours(storeId: string): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`http://localhost:4200/stores/store/${storeId}/schedule`, { headers: this.headers });
  }
}

