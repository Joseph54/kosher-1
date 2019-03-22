import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Restaurant} from '../restaurant';

@Injectable({
  providedIn: 'root'
})
export class KosherApiService {

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<any> {
    return this.http.get('http://localhost:3000/api/restaurants');
  }
}
