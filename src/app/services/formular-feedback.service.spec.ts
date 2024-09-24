import { TestBed } from '@angular/core/testing';

import { FormularFeedbackService } from './formular-feedback.service';

describe('FormularFeedbackService', () => {
  let service: FormularFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
