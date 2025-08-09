import { Component,Input } from '@angular/core';
import { NgFor,NgClass } from '@angular/common';
import { Calendar, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, Target, TrendingUp } from 'lucide-angular';
@Component({
  selector: 'app-proj-detail-card',
  imports: [NgClass,NgFor,LucideAngularModule],
  standalone:true,
  templateUrl: './proj-detail-card.html',
  styleUrl: './proj-detail-card.css',
  providers:[
    {
      multi:true,
      provide:LUCIDE_ICONS,
      useValue : new LucideIconProvider({TrendingUp,Calendar,Target})
    }
  ]
})
export class ProjDetailCard {
     @Input() title = '';
  @Input() description = '';
  @Input() status = ''; // 'In Progress', 'Completed', etc.
  @Input() priority = ''; // 'High Priority', 'Low Priority'
  @Input() progress = 0;
  @Input() taskSummary = ''; // '16/24'
  @Input() timeline = ''; // '2024-12-01 - 2025-02-15'
  @Input() budgetUsed = ''; // '$28,500'
  @Input() budgetTotal = ''; // '$45,000'
  @Input() team: string[] = []; // ['AC', 'MR', 'JS']
}
