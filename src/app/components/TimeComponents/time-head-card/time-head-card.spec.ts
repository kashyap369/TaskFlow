import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeHeadCard } from './time-head-card';

describe('TimeHeadCard', () => {
  let component: TimeHeadCard;
  let fixture: ComponentFixture<TimeHeadCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeHeadCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeHeadCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
