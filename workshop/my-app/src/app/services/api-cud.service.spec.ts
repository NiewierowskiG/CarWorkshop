import { TestBed } from '@angular/core/testing';

import { ApiCudService } from './api-cud.service';

describe('ApiCudService', () => {
  let service: ApiCudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
