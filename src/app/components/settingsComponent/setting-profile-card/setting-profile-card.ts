import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, LucideIconProvider, Camera, Mail, Phone, MapPin, LUCIDE_ICONS, Save } from 'lucide-angular';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-setting-profile-card',
  standalone: true,
  imports: [FormsModule, NgIf, LucideAngularModule],
  templateUrl: './setting-profile-card.html',
  styleUrl: './setting-profile-card.css',
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider({ Camera, Mail, Phone, MapPin,Save })
    }
  ]
})
export class SettingProfileCard {
  profile = {
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@company.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    bio: 'Experienced project manager with a passion for delivering high-quality results and leading cross-functional teams.',
  };

  onSave() {
    console.log('Changes Saved', this.profile);
  }

  onCancel() {
    console.log('Cancelled');
  }
}
