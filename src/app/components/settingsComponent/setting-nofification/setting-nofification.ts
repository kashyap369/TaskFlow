import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type PreferenceKey =
  | 'email'
  | 'push'
  | 'desktop'
  | 'reminders'
  | 'updates'
  | 'mentions';

interface PreferenceItem {
  key: PreferenceKey;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-setting-nofification',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './setting-nofification.html',
  styleUrl: './setting-nofification.css'
})
export class SettingNofification {
  preferences: { [K in PreferenceKey]: boolean } & { [key: string]: boolean } = {
    email: true,
    push: true,
    desktop: false,
    reminders: true,
    updates: true,
    mentions: true
  };

  notificationPrefs: PreferenceItem[] = [
    {
      key: 'email',
      title: 'Email Notifications',
      desc: 'Receive notifications via email'
    },
    {
      key: 'push',
      title: 'Push Notifications',
      desc: 'Receive push notifications on mobile'
    },
    {
      key: 'desktop',
      title: 'Desktop Notifications',
      desc: 'Show notifications on desktop'
    }
  ];

  activityPrefs: PreferenceItem[] = [
    {
      key: 'reminders',
      title: 'Task Reminders',
      desc: 'Get reminded about upcoming deadlines'
    },
    {
      key: 'updates',
      title: 'Project Updates',
      desc: 'Notifications about project changes'
    },
    {
      key: 'mentions',
      title: 'Team Mentions',
      desc: 'When someone mentions you in comments'
    }
  ];

  onSave() {
    console.log('Saved', this.preferences);
  }

  onCancel() {
    console.log('Cancelled');
  }
}
