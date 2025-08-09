import { Component } from '@angular/core';
import { NgFor, CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-report-analytics',
  standalone: true,
  imports: [NgFor, CurrencyPipe, NgClass],
  templateUrl: './report-analytics.html',
  styleUrl: './report-analytics.css'
})
export class ReportAnalytics {
  projectData = [
    {
      name: 'Website Redesign',
      progress: 68,
      currentBudget: 28500,
      totalBudget: 45000,
      teamSize: 5,
      status: 'On Track'
    },
    {
      name: 'Mobile App',
      progress: 45,
      currentBudget: 54000,
      totalBudget: 120000,
      teamSize: 8,
      status: 'At Risk'
    },
    {
      name: 'Database Migration',
      progress: 15,
      currentBudget: 5250,
      totalBudget: 35000,
      teamSize: 3,
      status: 'On Track'
    },
    {
      name: 'Security Audit',
      progress: 30,
      currentBudget: 5400,
      totalBudget: 18000,
      teamSize: 2,
      status: 'On Track'
    }
  ];
}
