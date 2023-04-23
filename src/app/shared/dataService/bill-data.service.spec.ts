import { TestBed } from '@angular/core/testing';

import { BillDataService } from './bill-data.service';

describe('BillDataService', () => {
  let service: BillDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
