import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Search } from './search/search';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Search, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}