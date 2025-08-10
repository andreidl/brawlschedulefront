import { TestBed } from '@angular/core/testing';

import { BrawlstarsLogs } from './brawlstars-logs';

describe('BrawlstarsLogs', () => {
  let service: BrawlstarsLogs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrawlstarsLogs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
