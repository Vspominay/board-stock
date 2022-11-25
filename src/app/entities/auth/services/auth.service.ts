import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly api = environment.api;

  constructor(private http: HttpClient) { }

  public login(email: string, password: string) {
    return this.http.post<{ email: string, name: string, token: string }>(`${this.api}login`, {
      email, password
    });
  }

  public signUp(email: string, name: string, password: string) {
    return this.http.post<{ email: string, name: string, token: string }>(`${this.api}sign-up`, {
      email, name, password
    });
  }
}
