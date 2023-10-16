import { Component } from '@angular/core';
import { MoviesRequestService } from '../services/movies-request.service';
import { AllMoviesApiObject } from '../interface/all-movies-api-object';

@Component({
  selector: 'app-movies-watch-list',
  templateUrl: './movies-watch-list.component.html',
  styleUrls: ['./movies-watch-list.component.css'],
})
export class MoviesWatchListComponent {
  moviesIdForCart!: Array<number>;
  watchListMovies: Array<AllMoviesApiObject> = [];
  constructor(private getMovies: MoviesRequestService) {}
  ngOnInit() {
    this.watchListMovies = [...this.getMovies.getMovieToCart()];
  }
}
