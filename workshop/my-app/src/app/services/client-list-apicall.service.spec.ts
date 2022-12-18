import { TestBed } from '@angular/core/testing';

import { ClientListApicallService } from './client-list-apicall.service';

describe('ClientListApicallService', () => {
  let service: ClientListApicallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientListApicallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
