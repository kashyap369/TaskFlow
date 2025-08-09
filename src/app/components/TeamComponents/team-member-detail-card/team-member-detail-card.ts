import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { AtSign, Calendar, Ellipsis, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, MapPin, Phone } from 'lucide-angular';
@Component({
  selector: 'app-team-member-detail-card',
  standalone: true,
  imports: [NgFor,LucideAngularModule],
  templateUrl: './team-member-detail-card.html',
  styleUrl: './team-member-detail-card.css',
  providers:[
    {
      multi:true,
      provide:LUCIDE_ICONS,
      useValue:new LucideIconProvider({
        AtSign,Phone,MapPin,Calendar,Ellipsis
      })
    }
  ]
})
export class TeamMemberDetailCard {
  @Input() imageUrl = '';
  @Input() name = '';
  @Input() role = '';
  @Input() email = '';
  @Input() phone = '';
  @Input() location = '';
  @Input() joinedDate = '';
  @Input() tasksCompleted = 0;
  @Input() projectsLed = 0;
  @Input() skills: string[] = [];
}
