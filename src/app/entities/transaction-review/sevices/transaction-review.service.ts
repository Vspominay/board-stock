import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentIntent } from '@stripe/stripe-js';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionReviewService {

  private readonly api = environment.api;

  constructor(private http: HttpClient) { }

  public createPaymentIntent(amount?: number): Observable<PaymentIntent> {
    return this.http.post<{ status: string, data: { paymentIntent: PaymentIntent } }>(`${this.api}transaction-review`, { amount: amount * 100 })
               .pipe(pluck('data'), pluck('paymentIntent'))
  }
}
