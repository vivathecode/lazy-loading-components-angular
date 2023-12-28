import { Component } from '@angular/core';

interface NewsItem {
  title: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-news-widget',
  standalone: true,
  imports: [],
  templateUrl: './news-widget.component.html',
  styleUrl: './news-widget.component.scss',
})
export class NewsWidgetComponent {
  newsItems: NewsItem[] = [
    {
      title: 'News Title 1',
      imageUrl: 'https://cdn.britannica.com/57/151657-131-A74A72C8/Camel-caravan-desert-sand-dunes-Sahara-North.jpg',
      description: 'Description for news item 1...',
    },
    {
      title: 'News Title 2',
      imageUrl: 'https://www.thoughtco.com/thmb/g8h6NnWWWVkm-KXNBgMx-0Edd2U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages_482194715-56a1329e5f9b58b7d0bcf666.jpg',
      description: 'Description for news item 2',
    },
  ];
}
