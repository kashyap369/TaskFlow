import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamHeaderCard } from './team-header-card';

describe('TeamHeaderCard', () => {
  let component: TeamHeaderCard;
  let fixture: ComponentFixture<TeamHeaderCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamHeaderCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamHeaderCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
