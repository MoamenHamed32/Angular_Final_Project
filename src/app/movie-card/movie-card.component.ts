import { Component, Input, OnInit } from '@angular/core';
import { MoviesRequestService } from '../services/movies-request.service';
import { AllMoviesApiObject } from '../interface/all-movies-api-object';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: AllMoviesApiObject;
  movieRate!: number;
  isDuplicated: boolean = true;
  moviesOnCart!: Array<AllMoviesApiObject>;

  constructor(
    private sendToServices: MoviesRequestService,
    private router: Router
  ) {}

  ngOnInit() {
    this.movie.img = `https://image.tmdb.org/t/p/w200${this.movie.poster_path}`;
    this.movieRate = (Math.round(this.movie.vote_average) / 10) * 100;
    this.moviesOnCart = this.sendToServices.getMovieToCart();
  }
  navigateToMovieDetails(movieId: number) {
    if (this.router.url.includes('/movie-details')) {
      this.router.navigate(['movie-details', movieId]);
    } else {
      this.router.navigate(['/movie-details', movieId]);
    }
  }
  addToCart(movie: AllMoviesApiObject) {
    if (this.moviesOnCart.indexOf(this.movie) != -1) {
      this.isDuplicated = true;
    } else {
      this.isDuplicated = false;
    }

    if (this.isDuplicated == false) {
      this.sendToServices.setMovieToCart(movie);
      this.movie.isFavorite = true;
    } else {
      this.sendToServices.removeFromCart(movie);
      this.movie.isFavorite = false;
    }

    this.sendToServices.setCounter();
  }
}
