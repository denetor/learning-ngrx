import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginDto} from '../../store/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  authenticate(dto: LoginDto) {
    return this.http.post('http://localhost:3000/auth/login', dto);
  }
}
