import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesRequestService } from '../services/movies-request.service';

@Component({
  selector: 'app-movie-search-page',
  templateUrl: './movie-search-page.component.html',
  styleUrls: ['./movie-search-page.component.css'],
})
export class MovieSearchPageComponent {
  keyword!: string;
  movies: Array<any> = [];
  pages: Array<number> = [];
  page: number = 1;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private getMovies: MoviesRequestService,
    private router: Router
  ) {}
  ngOnInit() {
    this.keyword = this.ActivatedRoute.snapshot.params['keyword'].toLowerCase();
    this.getResults(this.page);
    for (let i = 1; i < 5; i++) {
      this.pages.push(i);
    }
  }

  getResults(page: number) {
    this.getMovies.getSearchedMovies(this.keyword, page).subscribe((movies) => {
      this.movies = [...movies.results.slice(0, 12)];
    });
  }
  search(keyword: string) {
    this.keyword = keyword;
    if (this.router.url.includes('/movie-search')) {
      this.router.navigate(['movie-search', this.keyword]);
    } else {
      this.router.navigate(['/movie-search', this.keyword]);
    }

    this.getResults(this.page);
  }
  pagination(e: any) {
    this.page = e.target.innerHTML;
    this.getResults(this.page);
  }
  nextPage() {
    if (this.page < this.pages.length) {
      this.page++;
      this.getResults(this.page);
    }
  }
  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.getResults(this.page);
    }
  }
}
