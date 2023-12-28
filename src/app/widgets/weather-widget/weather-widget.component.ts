import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports: [],
  templateUrl: './weather-widget.component.html',
  styleUrl: './weather-widget.component.scss',
})
export class WeatherWidgetComponent {
  weather = {
    location: 'New York',
    temperature: 22, // Celsius
    condition: 'Cloudy',
    icon: 'path/to/cloudy-icon.png', // Replace with path to weather icon
    humidity: 65, // Percentage
    wind: 5, // km/h
  };
}
