import { TestBed } from '@angular/core/testing';

import { EmployeeDataStoreServiceService } from './employee-data-store-service.service';

describe('EmployeeDataStoreServiceService', () => {
  let service: EmployeeDataStoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDataStoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
