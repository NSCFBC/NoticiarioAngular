import { TestBed } from '@angular/core/testing';

import { EditUserResolveService } from './edit-user-resolve.service';

describe('EditUserResolveService', () => {
  let service: EditUserResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditUserResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
