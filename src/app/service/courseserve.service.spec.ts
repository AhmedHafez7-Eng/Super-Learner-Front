import { TestBed } from '@angular/core/testing';

import { CourseserveService } from './courseserve.service';

describe('CourseserveService', () => {
  let service: CourseserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
