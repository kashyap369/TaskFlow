import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberDetailCard } from './team-member-detail-card';

describe('TeamMemberDetailCard', () => {
  let component: TeamMemberDetailCard;
  let fixture: ComponentFixture<TeamMemberDetailCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamMemberDetailCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamMemberDetailCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
