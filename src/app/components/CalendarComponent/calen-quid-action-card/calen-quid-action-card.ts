import { Component } from '@angular/core';
import { Calendar, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, Plus, Users } from 'lucide-angular';
@Component({
  selector: 'app-calen-quid-action-card',
  standalone:true,
  imports: [LucideAngularModule],
  templateUrl: './calen-quid-action-card.html',
  styleUrl: './calen-quid-action-card.css',
  providers:[
    {
      multi:true,
      provide:LUCIDE_ICONS,
      useValue:new LucideIconProvider({Plus,Calendar,Users})
    }
  ]

})
export class CalenQuidActionCard {

}
