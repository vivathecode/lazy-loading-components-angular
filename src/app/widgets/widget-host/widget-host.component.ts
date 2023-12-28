import { Component, Type, signal } from '@angular/core';
import { WIDGET_LIST } from '../../constants/widget-list';
import { NgClass, NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-widget-host',
  standalone: true,
  imports: [NgClass, NgComponentOutlet],
  templateUrl: './widget-host.component.html',
  styleUrl: './widget-host.component.scss',
})
export class WidgetHostComponent {
  availableWidgets = WIDGET_LIST;

  selectedWidgetId = signal(0);
  savedWidgets = signal<Type<any>[]>([]);

  async addWidget() {
    const widget = WIDGET_LIST.find(widget => widget.id === this.selectedWidgetId());
    if (widget) {
      const component = await widget.load();
      this.savedWidgets.update(value => [...value, component]);
    }
  }

  widgetSelected(widgetId: number) {
    this.selectedWidgetId.set(widgetId);
  }

  removeWidget(index: number) {
    this.savedWidgets.update(value => {
      const newWidgets = [...value.slice(0, index), ...value.slice(index + 1)];
      return newWidgets;
    });
  }
}
