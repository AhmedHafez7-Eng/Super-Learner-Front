import { TestBed } from '@angular/core/testing';

import { TestseserveService } from './testseserve.service';

describe('TestseserveService', () => {
  let service: TestseserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestseserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
