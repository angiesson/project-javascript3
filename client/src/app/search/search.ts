import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-search',
  styleUrl: './search.css',
  templateUrl: './search.html',
})
export class Search {
  private router = inject(Router);
  searchTerm = signal('');

    search() {
    this.router.navigate(['/search-results'], {
      queryParams: { q: this.searchTerm() }
    });
}
}
