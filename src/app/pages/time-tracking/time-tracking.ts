import { Component } from '@angular/core';
import { TimeHeadCard } from '../../components/TimeComponents/time-head-card/time-head-card';
import { Download, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, Plus } from 'lucide-angular';
import { multicast } from 'rxjs';
import { TimeRecentEntries } from '../../components/TimeComponents/time-recent-entries/time-recent-entries';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-time-tracking',
  standalone: true,
  imports: [TimeHeadCard, LucideAngularModule, TimeRecentEntries,NgFor],
  templateUrl: './time-tracking.html',
  styleUrl: './time-tracking.css',
  providers: [
    {
      multi: true,
      provide: LUCIDE_ICONS,
      useValue: new LucideIconProvider({ Download, Plus })
    }
  ]
})
export class TimeTracking {
  weekData = [
    { label: 'Mon', hours: 8.5, percent: 85 },
    { label: 'Tue', hours: 7.2, percent: 72 },
    { label: 'Wed', hours: 8.8, percent: 88 },
    { label: 'Thu', hours: 6.5, percent: 65 },
    { label: 'Fri', hours: 7.8, percent: 78 },
    { label: 'Sat', hours: 2, percent: 20 },
    { label: 'Sun', hours: 0.5, percent: 5 }
  ];

  projectData = [
    { name: 'Website Redesign', hours: 18.5, percent: 35 },
    { name: 'Mobile App', hours: 14.2, percent: 27 },
    { name: 'Bug Fixes', hours: 8.7, percent: 16 },
    { name: 'Client Work', hours: 6.3, percent: 12 },
    { name: 'General', hours: 5.1, percent: 10 }
  ];


}
