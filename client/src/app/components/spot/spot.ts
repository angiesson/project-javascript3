import { Component, input } from '@angular/core';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.html',
})
export class Spot {
  imageUrl = input.required<string>();
  title = input.required<string>();
  link = input.required<string>();

}
