import { TestBed } from '@angular/core/testing';

import { GuardUserAccessGuard } from './guard-user-access.guard';

describe('GuardUserAccessGuard', () => {
  let guard: GuardUserAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardUserAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
