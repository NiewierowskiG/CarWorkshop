import { TestBed } from '@angular/core/testing';

import { WorkerListApicallService } from './worker-list-apicall.service';

describe('WorkerListApicallService', () => {
  let service: WorkerListApicallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkerListApicallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
