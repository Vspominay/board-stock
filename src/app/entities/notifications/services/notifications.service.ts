import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { IUserProfile } from '../../profile/interfaces/user.interface';
import { INotification } from '../interfaces/notification.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private readonly api = environment.api;

  constructor(private http: HttpClient) { }

  public getNotifications(): Observable<INotification[]> {
    return this.http.get<{ status: string, results: number, data: { notifications: INotification[] } }>(`${this.api}users/notifications`)
               .pipe(pluck('data'), pluck('notifications'));
  }

  public deleteNotification(id: string): Observable<INotification[]> {
    return this.http.delete<{ status: string, data: { document: IUserProfile } }>(`${this.api}users/notifications/${id}`)
               .pipe(pluck('data'), pluck('document'), pluck('notifications'));
  }
}
