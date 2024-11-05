import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepJourneyComponent } from './step-journey.component';

describe('StepJourneyComponent', () => {
  let component: StepJourneyComponent;
  let fixture: ComponentFixture<StepJourneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepJourneyComponent]
    });
    fixture = TestBed.createComponent(StepJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
