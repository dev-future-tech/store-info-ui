import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap, Observable, tap, toArray } from 'rxjs';
import { Store } from '../_model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getStore(storeId: string) : Observable<Store[]> {
    return this.http.get<Store>(`http://localhost:8020/store/v1/${storeId}`).pipe(
        toArray()
    );
  }

  getStoreHours(storeId: string): Observable<any> {
    return this.getStore(storeId)
    .pipe(
        mergeMap(storeVal => from(storeVal)),
        mergeMap((store) => this.http.get(`http://localhost:8020/store/v1/${store.store_id}/schedule`)
            .pipe(
                map(response => {
                    let data = response;
                    console.log(`Data is: ${JSON.stringify(response)}`);
                    console.log(`Data is: ${JSON.stringify(data)}`);
                    return data;
                }),
                map( completeStore => ({...store, hours: completeStore})),
                tap (vals => console.log(`vals: ${JSON.stringify(vals)}`))
            )
        ),
        tap( (value) => console.log(`I have value ${JSON.stringify(value)}`))
    )
}


}
