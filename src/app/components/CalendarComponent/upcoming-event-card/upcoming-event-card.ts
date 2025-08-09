import { Component } from '@angular/core';
import { NgFor, NgIf,DatePipe } from '@angular/common';

@Component({
  selector: 'app-upcoming-event-card',
  standalone: true,
  imports: [NgFor, NgIf,DatePipe],
  templateUrl: './upcoming-event-card.html',
  styleUrl: './upcoming-event-card.css',
})
export class UpcomingEventCard {
  events = [
    { name: 'Team Standup', date: new Date(2025, 6, 9) },
    { name: 'Client Review', date: new Date(2025, 6, 11) },
    { name: 'QA Deadline', date: new Date(2025, 6, 15) },
    { name: 'Demo Day', date: new Date(2025, 6, 20) }
  ];
}
