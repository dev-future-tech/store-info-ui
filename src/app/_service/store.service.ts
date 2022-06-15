import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, from, map, mergeMap, Observable, of, switchMap, tap, toArray } from 'rxjs';
import { Schedule, Store } from '../_model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getStoreParallel(storeId: string) : Observable<any> {

    return forkJoin({
      store: this.getStore(storeId),
      hours: this.getStoreHours(storeId)
    });
  }

  getStore(storeId: string) : Observable<Store> {
    return this.http.get<Store>(`http://localhost:8020/store/v1/${storeId}`);
  }

  getStoreHours(storeId: string): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`http://localhost:8020/store/v1/${storeId}/schedule`);
  }
}

