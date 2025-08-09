import { Component } from '@angular/core';
import {
  ChevronLeft,
  ChevronRight,
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
} from 'lucide-angular';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-calendar-compo',
  standalone: true,
  imports: [LucideAngularModule,NgFor],
  templateUrl: './calendar-compo.html',
  styleUrl: './calendar-compo.css',
  providers: [
    {
      multi: true,
      provide: LUCIDE_ICONS,
      useValue: new LucideIconProvider({ ChevronLeft, ChevronRight }),
    },
  ],
})
export class CalendarCompo {
  currentDate = new Date();
  monthYearLabel = '';
  calendarDays: { label: string; disabled: boolean; active: boolean }[] = [];

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar() {
    this.calendarDays = [];

    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    this.monthYearLabel = this.currentDate.toLocaleDateString('default', {
      year: 'numeric',
      month: 'long',
    });

    const firstDayOfMonth = new Date(year, month, 1);
    const startDayOfWeek = firstDayOfMonth.getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    // Fill leading empty cells
    for (let i = 0; i < startDayOfWeek; i++) {
      this.calendarDays.push({ label: '', disabled: true, active: false });
    }

    // Fill days of current month
    for (let day = 1; day <= totalDays; day++) {
      const isToday =
        today.getFullYear() === year &&
        today.getMonth() === month &&
        today.getDate() === day;

      this.calendarDays.push({
        label: day.toString(),
        disabled: false,
        active: isToday,
      });
    }
  }

  goToPreviousMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendar();
  }

  goToNextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendar();
  }

  goToToday() {
    this.currentDate = new Date();
    this.generateCalendar();
  }
}
