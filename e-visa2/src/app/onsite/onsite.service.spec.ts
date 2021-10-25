import { TestBed } from '@angular/core/testing';

import { onSiteService } from './onsite.service';

describe('OnsiteService', () => {
  let service: onSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(onSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
