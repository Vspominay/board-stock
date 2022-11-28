import { TestBed } from '@angular/core/testing';

import { BillboardDetailsResolver } from './billboard-details.resolver';

describe('BillboardDetailsResolver', () => {
  let resolver: BillboardDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BillboardDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
