import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarCompo } from './calendar-compo';

describe('CalendarCompo', () => {
  let component: CalendarCompo;
  let fixture: ComponentFixture<CalendarCompo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarCompo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarCompo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
