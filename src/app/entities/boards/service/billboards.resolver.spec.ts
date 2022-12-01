import { TestBed } from '@angular/core/testing';

import { BillboardsResolver } from './billboards.resolver';

describe('BillboardsResolver', () => {
  let resolver: BillboardsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BillboardsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
