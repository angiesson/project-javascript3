import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  title = 'Discover your signature scent';

  description = 'Explore our collection of unique fragrances.';

  imageUrl = 'https://picsum.photos/1200/500';
}
