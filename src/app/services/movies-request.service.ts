import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllMoviesApiObject } from '../interface/all-movies-api-object';
import { SingleMovieObject } from '../interface/single-movie-object';

@Injectable({
  providedIn: 'root',
})
export class MoviesRequestService {
  APIKey: string = '12811f19f46d21f4a0b1141adb8a2891';
  movieToCart: Array<any> = [];
  watchListCounter!: number;

  constructor(private http: HttpClient) {}

  // API's Getters
  getMovieList(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.APIKey}`
    );
  }
  getMovieDetails(id: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.APIKey}`
    );
  }
  getRecommendedMovies(id: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${this.APIKey}`
    );
  }

  // WatchList Functions
  setMovieToCart(movie: AllMoviesApiObject): void {
    if (this.movieToCart.indexOf(movie) == -1) {
      this.movieToCart.push(movie);
    }
  }
  getMovieToCart(): Array<AllMoviesApiObject> {
    return this.movieToCart;
  }

  removeFromCart(movie: AllMoviesApiObject): void {
    this.movieToCart.splice(this.movieToCart.indexOf(movie), 1);
  }
  removeFromWatchListById(movie: SingleMovieObject): void {
    const currentMovieIndex = this.movieToCart.findIndex(
      (data) => data.id == movie.id
    );
    if (currentMovieIndex != -1) {
      this.movieToCart.splice(currentMovieIndex, 1);
    }
  }

  // Header WatchList Counter
  setCounter(): void {
    this.watchListCounter = this.movieToCart.length;
  }
  getCounter(): number {
    return this.watchListCounter;
  }
}
