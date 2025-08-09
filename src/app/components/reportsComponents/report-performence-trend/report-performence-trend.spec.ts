import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPerformenceTrend } from './report-performence-trend';

describe('ReportPerformenceTrend', () => {
  let component: ReportPerformenceTrend;
  let fixture: ComponentFixture<ReportPerformenceTrend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportPerformenceTrend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportPerformenceTrend);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
