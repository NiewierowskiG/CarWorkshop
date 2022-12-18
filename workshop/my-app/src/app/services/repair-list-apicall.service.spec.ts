import { TestBed } from '@angular/core/testing';

import { RepairListApicallService } from './repair-list-apicall.service';

describe('RepairListApicallService', () => {
  let service: RepairListApicallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepairListApicallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
