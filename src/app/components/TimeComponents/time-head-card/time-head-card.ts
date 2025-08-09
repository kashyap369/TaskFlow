import { Component, Input } from '@angular/core';
import { BarChart, Calendar, Clock, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, TrendingUp } from "lucide-angular";

@Component({
  selector: 'app-time-head-card',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './time-head-card.html',
  styleUrl: './time-head-card.css',
  providers:[
    {
      multi:true,
      provide:LUCIDE_ICONS,
      useValue:new LucideIconProvider({Clock,Calendar,TrendingUp,BarChart})
    }
  ]
})
export class TimeHeadCard { 
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() icon: string = ''; // e.g., 'Clock', 'Calendar', 'TrendingUp', 'BarChart'
}
