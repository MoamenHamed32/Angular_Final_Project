import { Component, Input, OnInit } from '@angular/core';
import { MoviesRequestService } from '../services/movies-request.service';
import { AllMoviesApiObject } from '../interface/all-movies-api-object';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: AllMoviesApiObject;
  isDuplicated: boolean = true;
  moviesOnCart!: Array<AllMoviesApiObject>;

  constructor(private sendToServices: MoviesRequestService) {}

  ngOnInit() {
    this.moviesOnCart = this.sendToServices.getMovieToCart();
  }

  addToCart(movie: AllMoviesApiObject) {
    console.log(this.isDuplicated);

    if (this.moviesOnCart.indexOf(this.movie) != -1) {
      this.isDuplicated = true;
    } else {
      this.isDuplicated = false;
    }

    if (
      (this.movie.isFavorite === false ||
        this.movie.isFavorite === undefined) &&
      this.isDuplicated == false
    ) {
      this.sendToServices.setMovieToCart(movie);
    } else {
      this.sendToServices.removeFromCart(movie);
    }

    this.sendToServices.setCounter();
  }
}
