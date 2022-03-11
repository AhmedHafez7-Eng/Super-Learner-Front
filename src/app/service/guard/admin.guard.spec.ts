import { TestBed } from '@angular/core/testing';

import {AdminService } from './admin.service';

describe('AdminGuard', () => {
  let guard: AdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
