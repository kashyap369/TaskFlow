import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingProfileCard } from './setting-profile-card';

describe('SettingProfileCard', () => {
  let component: SettingProfileCard;
  let fixture: ComponentFixture<SettingProfileCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingProfileCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingProfileCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
