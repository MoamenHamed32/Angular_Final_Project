import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card-details',
  templateUrl: './movie-card-details.component.html',
  styleUrls: ['./movie-card-details.component.css'],
})
export class MovieCardDetailsComponent {
  @Input() movie: any;
  movieRate!: number;
  filledStars: Array<number> = [];
  emptyStars: Array<number> = [1, 1, 1, 1, 1];
  ngOnInit() {
    this.movie.img = `https://image.tmdb.org/t/p/w200${this.movie.poster_path}`;
    this.movieRate = (Math.round(this.movie.vote_average) / 10) * 100;
    for (let i = 0; i <= this.movieRate; i += 25) {
      this.filledStars.push(1);
    }

    this.emptyStars.length = 5 - this.filledStars.length;
  }
}
