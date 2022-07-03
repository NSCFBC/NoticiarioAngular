import { TestBed } from '@angular/core/testing';

import { LgLoginGuard } from './lg-login.guard';

describe('LgLoginGuard', () => {
  let guard: LgLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LgLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
