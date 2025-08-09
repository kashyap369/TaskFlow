import { Component } from '@angular/core';
import { Download, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, Users } from 'lucide-angular';
import { ReportStatusCard } from '../../components/reportsComponents/report-status-card/report-status-card';
import { ReportPerformenceTrend } from '../../components/reportsComponents/report-performence-trend/report-performence-trend';
import { ReportTeamPerformence } from '../../components/reportsComponents/report-team-performence/report-team-performence';
import { ReportAnalytics } from '../../components/reportsComponents/report-analytics/report-analytics';

@Component({
  selector: 'app-reports',
  standalone:true,
  imports: [LucideAngularModule,ReportStatusCard,ReportPerformenceTrend,ReportTeamPerformence,ReportAnalytics],
  templateUrl: './reports.html',
  styleUrl: './reports.css',
  providers:[
    {
      multi:true,
      provide:LUCIDE_ICONS,
      useValue:new LucideIconProvider({Download,Users})
    }
  ]
})
export class Reports {

}
