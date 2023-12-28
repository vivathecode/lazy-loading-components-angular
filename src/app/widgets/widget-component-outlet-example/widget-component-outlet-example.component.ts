import { Component } from '@angular/core';
import { CalendarWidgetComponent } from '../calendar-widget/calendar-widget.component';
import { NgComponentOutlet } from '@angular/common';
import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';

@Component({
  selector: 'app-widget-component-outlet-example',
  standalone: true,
  imports: [NgComponentOutlet],
  templateUrl: './widget-component-outlet-example.component.html',
  styleUrl: './widget-component-outlet-example.component.scss',
})
export class WidgetComponentOutletExampleComponent {
  widgetComponent!: new () => CalendarWidgetComponent | WeatherWidgetComponent;

  async loadComponent() {
    const ramdom = Math.random();
    if (ramdom > 0.5) {
      this.widgetComponent = await import('../calendar-widget/calendar-widget.component').then(
        mod => mod.CalendarWidgetComponent
      );
    } else {
      this.widgetComponent = await import('../weather-widget/weather-widget.component').then(
        mod => mod.WeatherWidgetComponent
      );
    }
  }
}
