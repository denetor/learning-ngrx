import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {LoginDto, LoginItem} from '../../store/models/login.model';
import {authenticate} from '../../store/actions/login.actions';
import {AppState} from '../../app.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  login$: Observable<LoginItem>;
  email = '';
  password = '';

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }


  doLogin(): void {
    const dto: LoginDto = {
      email: this.email,
      password: this.password,
    };
    console.log('LoginComponent.doLogin(): dispatching authenticate event');
    console.log({dto});
    this.store.dispatch(authenticate(dto));
  }

}
