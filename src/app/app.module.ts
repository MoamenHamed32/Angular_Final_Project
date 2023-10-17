import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HeaderComponent } from './header/header.component';
import { MoviesWatchListComponent } from './movies-watch-list/movies-watch-list.component';
import { MovieCardDetailsComponent } from './movie-card-details/movie-card-details.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { MovieDetialsComponent } from './movie-detials/movie-detials.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import {
  NgbModule,
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MoviesListComponent,
    HeaderComponent,
    MoviesWatchListComponent,
    MovieCardDetailsComponent,
    RecommendationComponent,
    MovieDetialsComponent,
    SearchSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
