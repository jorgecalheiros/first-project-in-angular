import { TestBed } from '@angular/core/testing';

import { ApiJsonplaceholderService } from './api-jsonplaceholder.service';

describe('ApiJsonplaceholderService', () => {
  let service: ApiJsonplaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiJsonplaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
