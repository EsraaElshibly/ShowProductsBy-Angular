import { TestBed } from '@angular/core/testing';

import { AdvertsingObserveralService } from './advertsing-observeral.service';

describe('AdvertsingObserveralService', () => {
  let service: AdvertsingObserveralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvertsingObserveralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
