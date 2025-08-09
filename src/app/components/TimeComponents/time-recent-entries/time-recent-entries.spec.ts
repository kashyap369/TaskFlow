import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRecentEntries } from './time-recent-entries';

describe('TimeRecentEntries', () => {
  let component: TimeRecentEntries;
  let fixture: ComponentFixture<TimeRecentEntries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeRecentEntries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeRecentEntries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
