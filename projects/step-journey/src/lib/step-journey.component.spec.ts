import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepJourneyComponent } from './step-journey.component';
import { StepJourneyModule } from './step-journey.module';

describe('StepJourneyComponent', () => {
  let component: StepJourneyComponent;
  let fixture: ComponentFixture<StepJourneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StepJourneyModule]
    });
    fixture = TestBed.createComponent(StepJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
