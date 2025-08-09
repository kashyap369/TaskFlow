import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingDeadlineCard } from './upcoming-deadline-card';

describe('UpcomingDeadlineCard', () => {
  let component: UpcomingDeadlineCard;
  let fixture: ComponentFixture<UpcomingDeadlineCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingDeadlineCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingDeadlineCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
