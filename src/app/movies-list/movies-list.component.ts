import { Component } from '@angular/core';
import { MoviesRequestService } from '../services/movies-request.service';
import { SingleMovieObject } from '../interface/single-movie-object';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  movieList!: Array<SingleMovieObject>;
  constructor(private moviesRequestService: MoviesRequestService) {}
  ngOnInit() {
    this.moviesRequestService.getMovieList().subscribe((x) => {
      this.movieList = x.results;
      console.log(this.movieList);
    });
  }
}
