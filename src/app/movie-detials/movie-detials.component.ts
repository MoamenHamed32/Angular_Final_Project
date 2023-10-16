import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesRequestService } from '../services/movies-request.service';
import { SingleMovieObject } from '../interface/single-movie-object';
import { AllMoviesApiObject } from '../interface/all-movies-api-object';
import { AddToWatchListFromDetailsService } from '../services/add-to-watch-list-from-details.service';

@Component({
  selector: 'app-movie-detials',
  templateUrl: './movie-detials.component.html',
  styleUrls: ['./movie-detials.component.css'],
})
export class MovieDetialsComponent {
  movieId!: number;
  movie!: SingleMovieObject;
  movieRate!: number;
  filledStars: Array<number> = [];
  emptyStars: Array<number> = [1, 1, 1, 1, 1];
  isDuplicated: boolean = true;
  moviesOnCart!: Array<any>;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private reqMovieDetails: MoviesRequestService,
    private WatchList: AddToWatchListFromDetailsService
  ) {}

  ngOnInit() {
    this.movieId = this.ActivatedRoute.snapshot.params['id'];
    this.reqMovieDetails.getMovieDetails(this.movieId).subscribe((movie) => {
      this.movie = movie;

      this.movieRate = (Math.round(movie.vote_average) / 10) * 100;

      for (let i = 0; i <= this.movieRate; i += 25) {
        this.filledStars.push(1);
      }
      this.emptyStars.length = 5 - this.filledStars.length;
      this.movie = movie;
    });
    this.moviesOnCart = this.reqMovieDetails.getMovieToCart();
  }

  watchListData(movie: SingleMovieObject) {
    if (this.moviesOnCart.indexOf(this.movie) != -1) {
      this.isDuplicated = true;
    } else {
      this.isDuplicated = false;
    }

    if (this.isDuplicated == false) {
      this.WatchList.addToWatchList(movie);
      this.movie.isFavorite = true;
    } else {
      this.WatchList.removeFromWatchList(movie);
      this.movie.isFavorite = false;
    }

    this.reqMovieDetails.setCounter();
  }
  removeMovie(movie: SingleMovieObject) {
    this.reqMovieDetails.removeFromWatchListById(movie);
  }
}
