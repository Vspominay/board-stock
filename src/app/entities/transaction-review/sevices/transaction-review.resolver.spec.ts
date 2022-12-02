import { TestBed } from '@angular/core/testing';

import { TransactionReviewResolver } from './transaction-review.resolver';

describe('TransactionReviewResolver', () => {
  let resolver: TransactionReviewResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TransactionReviewResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
