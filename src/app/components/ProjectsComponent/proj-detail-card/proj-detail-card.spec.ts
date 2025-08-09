import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjDetailCard } from './proj-detail-card';

describe('ProjDetailCard', () => {
  let component: ProjDetailCard;
  let fixture: ComponentFixture<ProjDetailCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjDetailCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjDetailCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
