import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesWatchListComponent } from './movies-watch-list/movies-watch-list.component';
import { MovieDetialsComponent } from './movie-detials/movie-detials.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'movies-watch-list', component: MoviesWatchListComponent },
  { path: 'movie-details/:id', component: MovieDetialsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
