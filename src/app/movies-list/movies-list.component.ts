import { Component } from '@angular/core';
import { MoviesRequestService } from '../services/movies-request.service';
import { AllMoviesApiObject } from '../interface/all-movies-api-object';
import { take } from 'rxjs';

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
      this.movieList = movies.results.slice(0, 12);
    });
  }
}
