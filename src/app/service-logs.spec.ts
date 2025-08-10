import { TestBed } from '@angular/core/testing';

import { ServiceLogs } from './service-logs';

describe('ServiceLogs', () => {
  let service: ServiceLogs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLogs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
