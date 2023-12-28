import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-widget',
  standalone: true,
  imports: [],
  templateUrl: './calendar-widget.component.html',
  styleUrl: './calendar-widget.component.scss',
})
export class CalendarWidgetComponent implements OnInit {
  daysInMonth: number[] = [];
  currentMonth: string = '';
  currentYear: number = 0;

  ngOnInit(): void {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    this.currentMonth = currentDate.toLocaleString('en-US', { month: 'long' });

    const daysInThisMonth = new Date(this.currentYear, currentDate.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= daysInThisMonth; i++) {
      this.daysInMonth.push(i);
    }
  }
}
