import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatfactsService {

  constructor(private http: HttpClient) {}

  getSome() {
    return this.http.get('https://cat-fact.herokuapp.com/facts');
  }
}
