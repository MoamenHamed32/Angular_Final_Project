import { Component } from '@angular/core';
import { MoviesRequestService } from '../services/movies-request.service';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css'],
})
export class SearchSectionComponent {
  constructor(private gettingMovies: MoviesRequestService) {}

  search() {}
  handleSubmit(value: any) {
    this.gettingMovies
      .getSearchedForMovies(value.searchValue)
      .subscribe((data) => console.log(data));
  }
}
