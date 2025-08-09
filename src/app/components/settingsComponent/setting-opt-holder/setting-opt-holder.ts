import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import {
  LucideAngularModule,
  LucideIconProvider,
  LUCIDE_ICONS,
  User, Bell, Shield, Palette, Globe, Database
} from 'lucide-angular';

@Component({
  selector: 'app-setting-opt-holder',
  standalone: true,
  imports: [NgFor, NgClass, LucideAngularModule],
  templateUrl: './setting-opt-holder.html',
  styleUrl: './setting-opt-holder.css',
  providers: [
    {
      multi: true,
      provide: LUCIDE_ICONS,
      useValue: new LucideIconProvider({
        User, Bell, Shield, Palette, Globe, Database
      })
    }
  ]
})
export class SettingOptHolder {
  settingOptions = [
    { label: 'Profile', icon: 'User', isActive: true },
    { label: 'Notifications', icon: 'Bell', isActive: false },
    { label: 'Security', icon: 'Shield', isActive: false },
    { label: 'Appearance', icon: 'Palette', isActive: false },
    { label: 'Integrations', icon: 'Globe', isActive: false },
    { label: 'Data & Privacy', icon: 'Database', isActive: false },
  ];

  setActive(option: any): void {
    this.settingOptions.forEach(opt => opt.isActive = false);
    option.isActive = true;
  }

  getActiveLabel(): string | undefined {
    return this.settingOptions.find(x => x.isActive)?.label;
  }
}
