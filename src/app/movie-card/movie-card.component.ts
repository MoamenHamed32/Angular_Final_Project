import { Component, Input } from '@angular/core';
import { SingleMovieObject } from '../interface/single-movie-object';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie!: SingleMovieObject;
}
