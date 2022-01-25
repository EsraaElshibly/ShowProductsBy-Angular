/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicesProductComponentService } from './ServicesProductComponent.service';

describe('Service: ServicesProductComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesProductComponentService]
    });
  });

  it('should ...', inject([ServicesProductComponentService], (service: ServicesProductComponentService) => {
    expect(service).toBeTruthy();
  }));
});
