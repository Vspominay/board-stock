import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { IUserProfile } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly api = environment.api;

  constructor(private http: HttpClient) { }

  public getProfile(): Observable<IUserProfile> {
    return this.http.get<{ status: string, data: { document: IUserProfile } }>(`${this.api}users/profile`)
               .pipe(pluck('data'), pluck('document'), map(user => {
                 return {
                   ...user,
                   photo: user.photo || 'https://i.pinimg.com/564x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg'
                 }
               }));
  }

  public updateProfile(name?: string, email?: string, photo?: string, phone?: string): Observable<IUserProfile> {
    return this.http.put<{ status: string, data: { document: IUserProfile } }>(`${this.api}users/profile`, {
      name,
      email,
      photo,
      phone
    }).pipe(
      pluck('data'),
      pluck('document'),
      map(user => {
        return {
          ...user,
          photo: user.photo || 'https://i.pinimg.com/564x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg'
        }
      })
    );
  }
}
