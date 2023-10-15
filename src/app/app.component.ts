import { Component } from '@angular/core';
import { MoviesRequestService } from './services/movies-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Final-Project';
  constructor(private movieReq: MoviesRequestService) {}
  ngOnInit() {
    this.movieReq.getMovieList().subscribe((data) => console.log(data));
    this.movieReq
      .getMovieDetails(575264)
      .subscribe((data) => console.log(data));
    this.movieReq
      .getRecommendedMovies(575264)
      .subscribe((data) => console.log(data));
  }
}
