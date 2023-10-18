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
  pages: Array<number> = [];
  page: number = 1;

  constructor(private moviesRequestService: MoviesRequestService) {}
  ngOnInit() {
    this.gettingMovies(this.page);
    for (let i = 1; i < 6; i++) {
      this.pages.push(i);
    }
    this.moviesRequestService.resetMovieCart();
    this.moviesRequestService.setCounter();
  }
  gettingMovies(page: number) {
    this.moviesRequestService.getMovieList(page).subscribe((movies) => {
      this.movieList = movies.results.slice(0, 12);
    });
  }
  pagination(e: any) {
    this.page = e.target.innerHTML;
    this.gettingMovies(this.page);
  }
  nextPage() {
    if (this.page < this.pages.length) {
      this.page++;
      this.gettingMovies(this.page);
    }
  }
  previousPage() {
    if (this.page > 0) {
      this.page--;
      this.gettingMovies(this.page);
    }
  }
}
