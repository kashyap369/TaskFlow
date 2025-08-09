import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report-performence-trend',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-performence-trend.html',
  styleUrl: './report-performence-trend.css'
})
export class ReportPerformenceTrend {
  performanceData = [
    { name: 'Jan', tasks: 45, hours: 180, efficiency: 85 },
    { name: 'Feb', tasks: 52, hours: 195, efficiency: 88 },
    { name: 'Mar', tasks: 48, hours: 175, efficiency: 82 },
    { name: 'Apr', tasks: 61, hours: 210, efficiency: 91 },
    { name: 'May', tasks: 58, hours: 200, efficiency: 89 },
    { name: 'Jun', tasks: 65, hours: 220, efficiency: 93 }
  ];
}
