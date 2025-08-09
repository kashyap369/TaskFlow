import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingNofification } from './setting-nofification';

describe('SettingNofification', () => {
  let component: SettingNofification;
  let fixture: ComponentFixture<SettingNofification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingNofification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingNofification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
