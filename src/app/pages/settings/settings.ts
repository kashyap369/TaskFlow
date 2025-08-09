import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SettingOptHolder } from '../../components/settingsComponent/setting-opt-holder/setting-opt-holder';
import { SettingProfileCard } from '../../components/settingsComponent/setting-profile-card/setting-profile-card';
import { SettingNofification } from '../../components/settingsComponent/setting-nofification/setting-nofification';
import { NgIf } from '@angular/common';
import { SecurityComponent } from '../../components/settingsComponent/security-component/security-component';
import { AppearanceComponent } from '../../components/settingsComponent/appearance-component/appearance-component';
import { IntegrationComponent } from '../../components/settingsComponent/integration-component/integration-component';
import { DataPrivacyComponent } from '../../components/settingsComponent/data-privacy-component/data-privacy-component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [SettingOptHolder, SettingProfileCard, SettingNofification,SecurityComponent,AppearanceComponent,DataPrivacyComponent, NgIf,IntegrationComponent],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings implements AfterViewInit {
  @ViewChild(SettingOptHolder) settingOptHolder!: SettingOptHolder;

  activeLabel: string = 'Profile'; // default

  ngAfterViewInit(): void {
    this.setActiveFromChild(); // after view is initialized
  }

  setActiveFromChild(): void {
    this.activeLabel = this.settingOptHolder.getActiveLabel() || '';
  }

  onClick(): void {
    // Re-evaluate on click anywhere in sidebar
    this.setActiveFromChild();
  }
}
