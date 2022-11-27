import { TestBed } from '@angular/core/testing';

import { WorkerListServiceService } from './worker-list-service.service';

describe('WorkerListServiceService', () => {
  let service: WorkerListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkerListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
