import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, Folder, Clock, CheckCircle, Users, Target } from 'lucide-angular';

@Component({
  selector: 'app-proj-card-head',
  standalone: true,
  imports: [LucideAngularModule,NgClass],
  templateUrl: './proj-card-head.html',
  styleUrl: './proj-card-head.css',
  providers: [
    {
      multi: true,
      provide: LUCIDE_ICONS,
      useValue: new LucideIconProvider({
        Folder,
        Clock,
        CheckCircle,
        Users,
        Target
      })
    }
  ]
})
export class ProjCardHead {
  @Input() label: string = '';
  @Input() count: number = 0;
  @Input() icon: string = 'Folder'; // default icon
  @Input() iconBgColor: string = 'bg-primary-subtle'; // Bootstrap utility class
  @Input() iconColor: string = 'text-primary'; // Bootstrap text color class
}
