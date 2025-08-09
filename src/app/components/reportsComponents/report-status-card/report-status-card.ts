import { Component, Input } from '@angular/core';
import { DecimalPipe, NgClass, NgIf } from '@angular/common';
import {
  LucideAngularModule,
  LucideIconProvider,
  LUCIDE_ICONS,
  TrendingUp,
  TrendingDown,
  Target,
  User,
  Users
} from 'lucide-angular';

@Component({
  selector: 'app-report-status-card',
  standalone: true,
  imports: [NgIf, LucideAngularModule,NgClass,DecimalPipe],
  templateUrl: './report-status-card.html',
  styleUrl: './report-status-card.css',
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider({ TrendingUp, TrendingDown, Target,Users })
    }
  ]
})
export class ReportStatusCard {
  @Input() label: string = 'Total Tasks';
  @Input() value: number = 1247;
  @Input() change: number = 12; // percentage
  @Input() icon: string = 'Target';
}
