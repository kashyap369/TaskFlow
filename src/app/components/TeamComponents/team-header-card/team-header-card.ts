import { Component, Input } from '@angular/core';
import { NgIf,NgClass } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-team-header-card',
  standalone: true,
  imports: [NgIf,NgClass, LucideAngularModule],
  templateUrl: './team-header-card.html',
  styleUrl: './team-header-card.css'
})
export class TeamHeaderCard {
  @Input() label!: string;
  @Input() value!: number | string;
  @Input() iconName!: string; // Lucide icon name
  @Input() iconColorClass!: string; // Tailwind or Bootstrap contextual bg class
}
