import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-spot',
  styleUrl: './spot.css',
  templateUrl: './spot.html',
})
export class Spot {
  imageUrl = input.required<string>();
  title = input.required<string>();
  link = input.required<string>();

}
