import { Component, EventEmitter, Output, Input } from '@angular/core';
import { MoviesRequestService } from '../services/movies-request.service';
import { ActivatedRoute } from '@angular/router';
import { AllMoviesApiObject } from '../interface/all-movies-api-object';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css'],
})
export class RecommendationComponent {
  movieId!: number;
  recommendedMovies!: Array<AllMoviesApiObject>;
  isRcommeneded: boolean = false;
  @Output() clickEmitterToDetails = new EventEmitter<any>();
  constructor(
    private moviesRequestService: MoviesRequestService,
    private ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.movieId = this.ActivatedRoute.snapshot.params['id'];
    this.getNewRecommendations(this.movieId);
  }
  getNewRecommendations(movieId: number) {
    this.moviesRequestService
      .getRecommendedMovies(movieId)
      .subscribe((movies) => {
        this.recommendedMovies = movies.results.slice(0, 6);
        if (this.recommendedMovies.length > 0) {
          this.isRcommeneded = true;
        } else {
          this.isRcommeneded = false;
        }
      });
  }
  clickEmitter(movieId: number) {
    this.getNewRecommendations(movieId);
    this.clickEmitterToDetails.emit(movieId);
  }
}
