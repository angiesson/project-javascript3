import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');


// Injicera http-client - kallas "dependecy injection"
private http = inject(HttpClient);

// Anropa servern och hämta produkter
ngOnInit() {
  this.http.get('/api/products').subscribe((products) => {
    console.log(products);
  });
}
}