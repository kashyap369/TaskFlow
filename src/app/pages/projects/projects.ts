import { Component } from '@angular/core';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, Plus } from 'lucide-angular';
import { ProjCardHead } from '../../components/ProjectsComponent/proj-card-head/proj-card-head';
import { ProjDetailCard } from '../../components/ProjectsComponent/proj-detail-card/proj-detail-card';


@Component({
  selector: 'app-projects',
  standalone:true,
  imports: [LucideAngularModule,ProjCardHead,ProjDetailCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  providers:[
    {
      multi:true,
      provide:LUCIDE_ICONS,
      useValue : new LucideIconProvider({Plus})
    }
  ]
})
export class Projects {

}
