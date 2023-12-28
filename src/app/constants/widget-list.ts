import { Widget } from '../models/widget';

export enum Widgets {
  WeatherWidget,
  CalendarWidget,
  NewsWidget,
  ProfileWidget,
}

export const WIDGET_LIST: Widget[] = [
  {
    id: Widgets.WeatherWidget,
    name: 'Weather Widget',
    load: () =>
      import('../widgets/weather-widget/weather-widget.component').then(
        m => m.WeatherWidgetComponent
      ),
  },
  {
    id: Widgets.CalendarWidget,
    name: 'Calendar Widget',
    load: () =>
      import('../widgets/calendar-widget/calendar-widget.component').then(
        m => m.CalendarWidgetComponent
      ),
  },
  {
    id: Widgets.NewsWidget,
    name: 'News Widget',
    load: () =>
      import('../widgets/news-widget/news-widget.component').then(m => m.NewsWidgetComponent),
  },
  {
    id: Widgets.ProfileWidget,
    name: 'Profile Widget',
    load: () =>
      import('../widgets/profile-widget/profile-widget.component').then(
        m => m.ProfileWidgetComponent
      ),
  },
];
