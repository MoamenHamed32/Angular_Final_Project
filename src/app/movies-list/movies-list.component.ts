import { Component } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  getRange(count: number): number[] {
    return Array(count).fill(0).map((x, i) => i);
  }

}
