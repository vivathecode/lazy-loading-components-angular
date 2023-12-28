import { Component, ViewContainerRef, inject } from '@angular/core';
import { CalendarWidgetComponent } from '../calendar-widget/calendar-widget.component';

@Component({
  selector: 'app-widget-view-container-example',
  standalone: true,
  imports: [],
  templateUrl: './widget-view-container-example.component.html',
  styleUrl: './widget-view-container-example.component.scss',
})
export class WidgetViewContainerExampleComponent {
  viewContainerRef = inject(ViewContainerRef);

  async loadCalendarWidget() {
    //const component = CalendarWidgetComponent;
    const component = await import('../calendar-widget/calendar-widget.component').then(
      mod => mod.CalendarWidgetComponent
    );
    this.viewContainerRef.createComponent(component);
  }
}
