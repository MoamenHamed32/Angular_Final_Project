import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesWatchListComponent } from './movies-watch-list/movies-watch-list.component';
import { MovieDetialsComponent } from './movie-detials/movie-detials.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { MovieSearchPageComponent } from './movie-search-page/movie-search-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'movies-watch-list', component: MoviesWatchListComponent },
  { path: 'movie-details/:id', component: MovieDetialsComponent },
  { path: 'movie-search/:keyword', component: MovieSearchPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
