import { TestBed } from '@angular/core/testing';

import { FavoriteResolver } from './favorite.resolver';

describe('FavoriteResolver', () => {
  let resolver: FavoriteResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FavoriteResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
