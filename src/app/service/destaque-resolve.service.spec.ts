import { TestBed } from '@angular/core/testing';

import { DestaqueResolveService } from './destaque-resolve.service';

describe('DestaqueResolveService', () => {
  let service: DestaqueResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestaqueResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
