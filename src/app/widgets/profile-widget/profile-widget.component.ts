import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-widget',
  standalone: true,
  imports: [],
  templateUrl: './profile-widget.component.html',
  styleUrl: './profile-widget.component.scss',
})
export class ProfileWidgetComponent {
  profile = {
    name: 'Leandro Maldonado',
    imageUrl: 'https://yt3.googleusercontent.com/H3Z7LU1PLrICahjrtIlcDLtMiEf9En6NEEUmDuOaLRN_GNc7r3G3zgY0FehhuZVw6dY_4cZ1Ng=s176-c-k-c0x00ffffff-no-rj',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    additionalInfo: 'Software Engineer | Tech Enthusiast | Blogger',
  };
}
