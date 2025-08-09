import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Filter, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider } from 'lucide-angular';

@Component({
  selector: 'app-time-recent-entries',
  standalone: true,
  imports: [LucideAngularModule, NgFor],
  templateUrl: './time-recent-entries.html',
  styleUrl: './time-recent-entries.css',
  providers: [
    {
      multi: true,
      provide: LUCIDE_ICONS,
      useValue: new LucideIconProvider({ Filter }) // Icon name must be lowercase to match HTML
    }
  ]
})
export class TimeRecentEntries {
  entries = [
    {
      title: 'Design new landing page',
      category: 'Website Redesign',
      date: '2025-01-15',
      time: '09:00 AM - 11:30 AM',
      duration: '2h 30m'
    },
    {
      title: 'Fix authentication bug',
      category: 'Bug Fixes',
      date: '2025-01-15',
      time: '02:00 PM - 04:15 PM',
      duration: '2h 15m'
    },
    {
      title: 'Team standup meeting',
      category: 'General',
      date: '2025-01-15',
      time: '09:00 AM - 09:30 AM',
      duration: '30m'
    },
    {
      title: 'Code review session',
      category: 'Development',
      date: '2025-01-14',
      time: '03:00 PM - 04:45 PM',
      duration: '1h 45m'
    }
  ];
}
