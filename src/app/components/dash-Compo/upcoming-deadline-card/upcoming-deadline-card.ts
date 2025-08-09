import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Flag, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider } from 'lucide-angular';


@Component({
  selector: 'app-upcoming-deadline-card',
  imports: [NgClass,LucideAngularModule],
  standalone:true,
  templateUrl: './upcoming-deadline-card.html',
  styleUrl: './upcoming-deadline-card.css',
  providers:[
    {
        multi:true,
        provide:LUCIDE_ICONS,
        useValue:new LucideIconProvider({Flag})
    }
  ]
})
export class UpcomingDeadlineCard {
   @Input() title = '';
  @Input() priority = ''; // e.g. 'High'
  @Input() date = '';     // e.g. 'Jan 12'
}
