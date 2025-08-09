import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingOptHolder } from './setting-opt-holder';

describe('SettingOptHolder', () => {
  let component: SettingOptHolder;
  let fixture: ComponentFixture<SettingOptHolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingOptHolder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingOptHolder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
