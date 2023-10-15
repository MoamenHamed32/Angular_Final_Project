import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesRequestService {
  APIKey: string = '12811f19f46d21f4a0b1141adb8a2891';
  constructor(private http: HttpClient) {}
  getMovieList(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.APIKey}`
    );
  }
  getMovieDetails(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.APIKey}`
    );
  }
  getRecommendedMovies(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${this.APIKey}`
    );
  }
}
