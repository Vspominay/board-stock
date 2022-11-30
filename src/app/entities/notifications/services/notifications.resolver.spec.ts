import { TestBed } from '@angular/core/testing';

import { NotificationsResolver } from './notifications.resolver';

describe('NotificationsResolver', () => {
  let resolver: NotificationsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NotificationsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
