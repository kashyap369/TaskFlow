import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTeamPerformence } from './report-team-performence';

describe('ReportTeamPerformence', () => {
  let component: ReportTeamPerformence;
  let fixture: ComponentFixture<ReportTeamPerformence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportTeamPerformence]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportTeamPerformence);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
