import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  styleUrl: './search.css',
  templateUrl: './search.html',
})
export class Search {

  private router = inject(Router);

  searchTerm = signal('');

  search() {
    const term = this.searchTerm().trim();

    if (!term) {
      return;
    }

    this.router.navigate(['/search-results'], {
      queryParams: { q: term }
    });

    this.searchTerm.set('');
  }
}
