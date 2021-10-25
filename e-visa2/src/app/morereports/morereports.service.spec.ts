import { TestBed } from '@angular/core/testing';

import { MoreReportsService } from './morereports.service';

describe('ReportsService', () => {
  let service: MoreReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoreReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
