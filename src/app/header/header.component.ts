import { Component } from '@angular/core';
import { MoviesRequestService } from '../services/movies-request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  watchListCounter!: number;
  constructor(private getWatchListCounter: MoviesRequestService) {}
  ngDoCheck() {
    this.watchListCounter = this.getWatchListCounter.getCounter();
  }
}
