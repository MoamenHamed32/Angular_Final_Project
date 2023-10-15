import { Component } from '@angular/core';
import { MoviesRequestService } from '../services/movies-request.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css'],
})
export class RecommendationComponent {
  movieId!: number;
  constructor(private moviesRequestService: MoviesRequestService) {}
  // ngOnInit() {
  //   this.moviesRequestService.getRecommendedMovies(575264).subscribe((data) => {
  //     console.log(data);
  //   });
  //   this.moviesRequestService.getMovieList().subscribe((x) => {
  //     console.log(x);
  //   });
  // }
}
