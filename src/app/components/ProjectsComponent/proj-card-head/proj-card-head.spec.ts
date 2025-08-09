import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjCardHead } from './proj-card-head';

describe('ProjCardHead', () => {
  let component: ProjCardHead;
  let fixture: ComponentFixture<ProjCardHead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjCardHead]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjCardHead);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
