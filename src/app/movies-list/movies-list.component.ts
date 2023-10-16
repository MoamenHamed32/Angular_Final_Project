import { Component } from '@angular/core';
import { MoviesRequestService } from '../services/movies-request.service';
import { AllMoviesApiObject } from '../interface/all-movies-api-object';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  movieList!: Array<AllMoviesApiObject>;
  movieToSetHisFavorite!: AllMoviesApiObject;
  currentMovie!: AllMoviesApiObject;

  constructor(private moviesRequestService: MoviesRequestService) {}
  ngOnInit() {
    this.moviesRequestService.getMovieList().subscribe((movies) => {
      this.movieList = movies.results;
    });
  }

  getRange(count: number): number[] {
    return Array(count)
      .fill(0)
      .map((x, i) => i);
  }
}
