import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Recepty } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ReceptyService {
//  baseUrl = 'http://localhost/api/recepty';
baseUrl = 'https://bebrbr20.sps-prosek.cz/WEB/SQL/api/recepty/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.baseUrl}/list.php`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
}
