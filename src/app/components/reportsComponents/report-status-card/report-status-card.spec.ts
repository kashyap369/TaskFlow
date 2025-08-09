import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStatusCard } from './report-status-card';

describe('ReportStatusCard', () => {
  let component: ReportStatusCard;
  let fixture: ComponentFixture<ReportStatusCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportStatusCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportStatusCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
