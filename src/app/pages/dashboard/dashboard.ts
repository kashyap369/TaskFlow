import { Component } from '@angular/core';
import { CircleAlert, CircleCheck, ClockAlert, Goal, Import, LUCIDE_ICONS,LucideAngularModule,LucideIconProvider, PlusCircle } from 'lucide-angular';
import { TaskStateCard } from '../../components/dash-Compo/task-state-card/task-state-card';
import { UpcomingDeadlineCard } from '../../components/dash-Compo/upcoming-deadline-card/upcoming-deadline-card';
import { RecentTaskCard } from '../../components/dash-Compo/recent-task-card/recent-task-card';
import { NgClass,NgIf } from '@angular/common';
import { CreateTaskModal } from '../../components/dash-Compo/create-task-modal/create-task-modal';
@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [LucideAngularModule,TaskStateCard,RecentTaskCard,UpcomingDeadlineCard,NgClass,NgIf,CreateTaskModal],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  providers:[
    {
      provide:LUCIDE_ICONS,
      multi:true,
      useValue : new LucideIconProvider({PlusCircle,CircleCheck,ClockAlert,Goal,CircleAlert})
    }
  ]
})
export class Dashboard {

  showModal = false; // ✅ State to control modal visibility

isModalVisible = false;

openModal() {
  this.isModalVisible = true;
}

}
