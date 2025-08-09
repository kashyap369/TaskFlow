import { Component } from '@angular/core';
import { CirclePlus, Flag, Funnel, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, Plus } from 'lucide-angular';
import { TaskCard } from '../../components/taskComponents/task-card/task-card';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [LucideAngularModule,TaskCard],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css'],  // ✅ Corrected plural form
  providers:[
    {
      multi:true,
      provide:  LUCIDE_ICONS,
      useValue: new LucideIconProvider({Plus,Funnel,Flag})
    }
  ]
})
export class TasksComponent {}
