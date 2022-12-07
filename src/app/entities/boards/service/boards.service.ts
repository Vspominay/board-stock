import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { IBillboardStatus } from '../../../interfaces/billboard-status.interface';
import { IBillboard } from '../../../interfaces/billboard.interface';
import { ICreateBillboard } from '../pages/create-billboard/state/create-billboard.reducers';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  private readonly api = environment.api;

  constructor(private http: HttpClient) { }

  public getBillboards(search?: string, searchField: string = 'title'): Observable<IBillboardStatus[]> {
    return this.http.get<{ status: string, result: number, data: { documents: IBillboardStatus[] } }>(`${this.api}billboards-status`, {
      params: {
        search: search || '', searchField
      }
    })
               .pipe(
                 pluck('data'),
                 pluck('documents')
               );
  }

  public createBillboard(createBillboardParams: ICreateBillboard): Observable<IBillboard> {
    return this.http.post<{ status: string, data: IBillboard }>(`${this.api}billboards-status`, { ...createBillboardParams })
               .pipe(pluck('data'));
  }

  public getBillboardInformation(id: string): Observable<IBillboardStatus> {
    return this.http.get<{ status: string, data: { document: IBillboardStatus } }>(`${this.api}billboards-status/${id}`)
               .pipe(
                 pluck('data'),
                 pluck('document'),
               );
  }

  public toggleFavoriteBillboard(id: string, isFavorite: boolean): Observable<IBillboardStatus> {
    return this.http.put<{ status: string, data: { document: IBillboardStatus } }>(`${this.api}billboards-status/${id}`, { isFavorite })
               .pipe(pluck('data'), pluck('document'));
  }

  public getFavoriteBillboards(): Observable<IBillboardStatus[]> {
    return this.http.get<{ status: string, data: { documents: IBillboardStatus[] } }>(`${this.api}billboards-status/favorite`)
               .pipe(pluck('data'), pluck('documents'));
  }
}
