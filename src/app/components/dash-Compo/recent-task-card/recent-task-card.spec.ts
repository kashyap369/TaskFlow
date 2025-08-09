import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTaskCard } from './recent-task-card';

describe('RecentTaskCard', () => {
  let component: RecentTaskCard;
  let fixture: ComponentFixture<RecentTaskCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentTaskCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentTaskCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
