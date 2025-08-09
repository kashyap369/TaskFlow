import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  LucideAngularModule,
  LUCIDE_ICONS,
  LucideIconProvider,
  Save,
  X,
  Download,
  Trash
} from 'lucide-angular';

@Component({
  selector: 'app-data-privacy-component',
  standalone: true,
  imports: [NgIf, LucideAngularModule],
  templateUrl: './data-privacy-component.html',
  styleUrl: './data-privacy-component.css',
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider({ Save, X, Download, Trash })
    }
  ]
})
export class DataPrivacyComponent {
  onExport() {
    console.log('Exporting data...');
  }

  onDelete() {
    console.warn('Account deletion triggered!');
  }

  onSave() {
    console.log('Changes saved');
  }

  onCancel() {
    console.log('Cancelled');
  }
}
