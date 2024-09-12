import { TestBed } from '@angular/core/testing';

import { QuotesControlService } from './quotes-control.service';

describe('QuotesControlService', () => {
  let service: QuotesControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotesControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
