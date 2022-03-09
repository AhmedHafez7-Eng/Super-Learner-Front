import { TestBed } from '@angular/core/testing';

import { StudentserveService } from './studentserve.service';

describe('StudentserveService', () => {
  let service: StudentserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
