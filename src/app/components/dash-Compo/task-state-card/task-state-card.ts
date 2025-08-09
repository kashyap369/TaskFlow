import { Component,Input } from '@angular/core';
import { NgClass,NgIf } from '@angular/common';
import { CircleAlert, CircleCheck, ClockAlert, Goal, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider } from 'lucide-angular';

@Component({
  selector: 'app-task-state-card',
  standalone:true,
  imports: [NgClass,LucideAngularModule],
  templateUrl: './task-state-card.html',
  styleUrl: './task-state-card.css',
  providers:[
    {
      multi:true,
      provide:LUCIDE_ICONS,
      useValue: new LucideIconProvider({CircleAlert,CircleCheck,Goal,ClockAlert})
    }
  ]
})
export class TaskStateCard {
  @Input() title = '';
  @Input() value = 0;
  @Input() icon = '';
  @Input() change = '';
  @Input() changeType: 'primary' | 'success' | 'warning' | 'danger' = 'primary';
  @Input() description = '';
}
