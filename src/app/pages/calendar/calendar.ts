import { Component, importProvidersFrom } from '@angular/core';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, Plus } from 'lucide-angular';
import { CalendarCompo } from '../../components/CalendarComponent/calendar-compo/calendar-compo';
import { CalenQuidActionCard } from '../../components/CalendarComponent/calen-quid-action-card/calen-quid-action-card';
import { UpcomingEventCard } from '../../components/CalendarComponent/upcoming-event-card/upcoming-event-card';
@Component({
  selector: 'app-calendar',
  standalone:true,
  imports: [LucideAngularModule,CalendarCompo,CalenQuidActionCard,UpcomingEventCard],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css',
  providers:[
    {
      multi:true,
      provide:LUCIDE_ICONS,
      useValue:new LucideIconProvider({Plus})
    }
  ]
})
export class Calendar {

}
