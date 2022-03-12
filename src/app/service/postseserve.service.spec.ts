import { TestBed } from '@angular/core/testing';

import { PostseserveService } from './postseserve.service';

describe('PostseserveService', () => {
  let service: PostseserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostseserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
