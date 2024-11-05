import { TestBed } from '@angular/core/testing';

import { StepJourneyService } from './step-journey.service';

describe('StepJourneyService', () => {
  let service: StepJourneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepJourneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
