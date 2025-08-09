import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  LucideAngularModule,
  LUCIDE_ICONS,
  LucideIconProvider,
  Save,
  X
} from 'lucide-angular';

@Component({
  selector: 'app-appearance-component',
  standalone: true,
  imports: [NgClass, NgFor, FormsModule, LucideAngularModule],
  templateUrl: './appearance-component.html',
  styleUrl: './appearance-component.css',
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider({ Save, X })
    }
  ]
})
export class AppearanceComponent {
  themes = ['Light', 'Dark', 'Auto'];
  selectedTheme = 'Light';

  selectTheme(theme: string) {
    this.selectedTheme = theme;
  }

  onSave() {
    console.log('Theme saved:', this.selectedTheme);
  }

  onCancel() {
    console.log('Cancelled');
  }
}
