import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenQuidActionCard } from './calen-quid-action-card';

describe('CalenQuidActionCard', () => {
  let component: CalenQuidActionCard;
  let fixture: ComponentFixture<CalenQuidActionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalenQuidActionCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenQuidActionCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
