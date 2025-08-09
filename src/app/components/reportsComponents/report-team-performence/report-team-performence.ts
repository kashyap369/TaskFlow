import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report-team-performence',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-team-performence.html',
  styleUrl: './report-team-performence.css'
})
export class ReportTeamPerformence {
  teamMembers = [
    { name: 'Alex Chen', tasks: 156, hours: 320, projects: 8, efficiency: 92 },
    { name: 'Maria Rodriguez', tasks: 143, hours: 298, projects: 6, efficiency: 89 },
    { name: 'John Smith', tasks: 167, hours: 345, projects: 9, efficiency: 94 },
    { name: 'Lisa Wang', tasks: 134, hours: 287, projects: 7, efficiency: 87 },
    { name: 'David Kim', tasks: 128, hours: 276, projects: 5, efficiency: 85 }
  ];
}
