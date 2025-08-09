import { Component } from '@angular/core';
import {
  LucideAngularModule,
  LUCIDE_ICONS,
  LucideIconProvider,
  KeyRound,
  ShieldCheck,
  Smartphone,
  Save,
  X
} from 'lucide-angular';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-security-component',
  standalone: true,
  imports: [LucideAngularModule, NgIf, NgFor, FormsModule],
  templateUrl: './security-component.html',
  styleUrl: './security-component.css',
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider({
        KeyRound,
        ShieldCheck,
        Smartphone,
        Save,
        X
      })
    }
  ]
})
export class SecurityComponent {
  sessions = [
    {
      name: 'Current Session',
      device: 'Chrome on macOS – New York, NY',
      lastActive: 'Now',
      isCurrent: true
    },
    {
      name: 'Mobile App',
      device: 'iPhone – New York, NY',
      lastActive: '2 hours ago',
      isCurrent: false
    }
  ];
}
