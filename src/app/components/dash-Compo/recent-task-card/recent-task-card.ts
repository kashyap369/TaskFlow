import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Calendar, Flag, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider } from 'lucide-angular';

@Component({
  selector: 'app-recent-task-card',
  standalone: true,
  imports: [NgIf, LucideAngularModule,NgClass],
  templateUrl: './recent-task-card.html',
  styleUrl: './recent-task-card.css',
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider({ Calendar,Flag })
    }
  ]
})
export class RecentTaskCard {
    @Input() title = '';
  @Input() subtitle = '';
  @Input() priority = ''; // e.g. 'High'
  @Input() status = '';   // e.g. 'In Progress'
  @Input() assignee = '';
  @Input() dueDate: string = ''; // e.g. '2025-01-15'
}
