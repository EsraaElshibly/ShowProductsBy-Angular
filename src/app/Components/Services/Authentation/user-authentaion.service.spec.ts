import { TestBed } from '@angular/core/testing';

import { UserAuthentaionService } from './user-authentaion.service';

describe('UserAuthentaionService', () => {
  let service: UserAuthentaionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAuthentaionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
