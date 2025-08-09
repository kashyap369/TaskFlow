import { Component } from '@angular/core';
import { Bell, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider } from 'lucide-angular';
@Component({
  selector: 'app-header',
  standalone:true,
  imports: [LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  providers:[
    {
      provide:LUCIDE_ICONS,
      multi:true,
      useValue:new LucideIconProvider({Bell})
    }
  ]
})
export class Header {

}
