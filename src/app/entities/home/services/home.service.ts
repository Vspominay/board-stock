import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { IHomePage } from '../state/home.reducers';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly api = environment.api;

  constructor(private http: HttpClient) { }

  public fetchHomeData(): Observable<IHomePage> {
    return this.http.get<{ status: string, data: IHomePage }>(`${this.api}dashboard`)
               .pipe(pluck('data'), map(homeData => {
                 return {
                   ...homeData,
                   agents: homeData.agents.map(agent => ({
                     ...agent,
                     rate: Math.trunc(Math.random() * 5),
                     photo: agent.photo || 'https://i.pinimg.com/564x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg'
                   })),
                   user: {
                     ...homeData.user,
                     photo: homeData.user.photo || 'https://i.pinimg.com/564x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg'
                   }
                 }
               }));
  }
}
