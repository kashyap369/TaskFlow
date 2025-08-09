import { Component, Input } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { Calendar, Clock, Ellipsis, Flag, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, User } from 'lucide-angular';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [NgClass,NgFor,LucideAngularModule],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
  providers:[
    {
      multi:true,
      provide:LUCIDE_ICONS,
      useValue:new LucideIconProvider({Flag,User,Clock,Ellipsis,Calendar})
    }
  ]
})
export class TaskCard {
  @Input() title = '';
  @Input() description = '';
  @Input() priority = '';         // 'High', 'Medium', 'Low'
  @Input() status = '';           // 'Pending', 'In Progress', 'Completed'
  @Input() assignee = '';
  @Input() dueDate = '';          // Format: 'YYYY-MM-DD'
  @Input() project = '';          // e.g. 'Website Redesign'
  @Input() tags: string[] = [];   // e.g. ['Design', 'Frontend']
  @Input() progress = 0;          // Number (0–100)
}
