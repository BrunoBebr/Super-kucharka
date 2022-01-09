import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { DeatilRecept, Recepty } from '../interface';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReceptyService {
//  baseUrl = 'http://localhost/api/recepty';
baseUrl = 'https://bebrbr20.sps-prosek.cz/WEB/SQL/api/recepty';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.baseUrl}/list.php`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  getSpecific(id: number) {
    let params = new HttpParams().set("id", id);
    return this.http.get(`${this.baseUrl}/search.php`, { params }).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  getFiltr(par:any) {
    let params = new HttpParams().set("params", par);
    
    
    return this.http.get(`${this.baseUrl}/filtr.php`, { params }).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

  store(data: Recepty) {
    return this.http.post(`${this.baseUrl}/store.php`, { data: data }).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
}
