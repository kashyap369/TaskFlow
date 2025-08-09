import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Added for navigation
import { LucideAngularModule, LayoutDashboard, CircleCheckBig, FolderOpen, Calendar, Users, Clock, ChartColumn, Settings } from 'lucide-angular'; // Removed unused imports
import { LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular'; // Simplified import
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-aside-bar',
  standalone: true,
  imports: [LucideAngularModule,RouterModule], // No need to add Router here, it's injected
  templateUrl: './aside-bar.html',
  styleUrl: './aside-bar.css',
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider({ LayoutDashboard, CircleCheckBig, FolderOpen, Calendar, Users, Clock, ChartColumn, Settings })
    }
  ]
})
export class AsideBar { 
  readonly icons = { LayoutDashboard, CircleCheckBig, FolderOpen, Calendar, Users, Clock, ChartColumn, Settings }; // Consistent readonly object

  constructor(private router: Router) {} // Injected Router

  navigate(path: string) {
    this.router.navigate([path]); // Manual navigation if needed
  }
}