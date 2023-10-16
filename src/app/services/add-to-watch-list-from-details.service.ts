import { Injectable } from '@angular/core';
import { MoviesRequestService } from './movies-request.service';
import { SingleMovieObject } from '../interface/single-movie-object';

@Injectable({
  providedIn: 'root',
})
export class AddToWatchListFromDetailsService {
  constructor(private movieRequeset: MoviesRequestService) {}

  addToWatchList(movie: SingleMovieObject) {
    if (this.movieRequeset.movieToCart.indexOf(movie) == -1) {
      this.movieRequeset.movieToCart.push(movie);
    }
  }
  removeFromWatchList(movie: SingleMovieObject) {
    this.movieRequeset.movieToCart.splice(
      this.movieRequeset.movieToCart.indexOf(movie),
      1
    );
  }
}
