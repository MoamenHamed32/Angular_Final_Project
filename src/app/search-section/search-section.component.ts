import { Component } from '@angular/core';
import { MoviesRequestService } from '../services/movies-request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css'],
})
export class SearchSectionComponent {
  constructor(
    private gettingMovies: MoviesRequestService,
    private ActivatedRoute: ActivatedRoute
  ) {}
}
