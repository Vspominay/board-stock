import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { IBillboard } from '../../../interfaces/billboard.interface';
import { ICreateBillboard } from '../pages/create-billboard/state/create-billboard.reducers';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  private readonly api = environment.api;

  constructor(private http: HttpClient) { }

  public getBillboards(): Observable<IBillboard[]> {
    return this.http.get<{ status: string, result: number, data: IBillboard[] }>(`${this.api}billboards`)
               .pipe(
                 pluck('data'),
                 pluck('billboards')
               );
  }

  public createBillboard(createBillboardParams: ICreateBillboard): Observable<IBillboard> {
    return this.http.post<{ status: string, data: IBillboard }>(`${this.api}billboards`, { ...createBillboardParams })
               .pipe(pluck('data'));
  }

  public getBillboardInformation(id: string): Observable<IBillboard> {
    return this.http.get<{ status: string, data: { billboard: IBillboard } }>(`${this.api}billboards/${id}`)
               .pipe(
                 pluck('data'),
                 pluck('billboard'),
               );
  }
}
