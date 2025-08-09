import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  LucideAngularModule,
  LUCIDE_ICONS,
  LucideIconProvider,
  Save,
  X,
  MessageSquare,
  Calendar,
  Github,
  Bug,
  Trello,
  Video
} from 'lucide-angular';

@Component({
  selector: 'app-integration-component',
  standalone: true,
  imports: [NgFor, FormsModule,NgClass, LucideAngularModule],
  templateUrl: './integration-component.html',
  styleUrl: './integration-component.css',
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider({
        Save,
        X,
        MessageSquare,
        Calendar,
        Github,
        Bug,
        Trello,
        Video
      })
    }
  ]
})
export class IntegrationComponent {
  apps = [
    { name: 'Slack', description: 'Get notifications in Slack', icon: 'MessageSquare', connected: true },
    { name: 'Google Calendar', description: 'Sync tasks with calendar', icon: 'Calendar', connected: true },
    { name: 'GitHub', description: 'Link commits to tasks', icon: 'Github', connected: false },
    { name: 'Jira', description: 'Import issues from Jira', icon: 'Bug', connected: false },
    { name: 'Trello', description: 'Sync boards and cards', icon: 'Trello', connected: true },
    { name: 'Zoom', description: 'Schedule meetings', icon: 'Video', connected: false },
  ];

  toggleConnection(app: any) {
    app.connected = !app.connected;
  }

  onSave() {
    console.log('Saved connected apps:', this.apps);
  }

  onCancel() {
    console.log('Changes canceled');
  }
}
