import { TestBed } from '@angular/core/testing';

import { TransactionReviewService } from './transaction-review.service';

describe('TransactionReviewService', () => {
  let service: TransactionReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
