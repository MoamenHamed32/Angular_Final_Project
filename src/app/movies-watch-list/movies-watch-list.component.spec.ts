import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesWatchListComponent } from './movies-watch-list.component';

describe('MoviesWatchListComponent', () => {
  let component: MoviesWatchListComponent;
  let fixture: ComponentFixture<MoviesWatchListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesWatchListComponent]
    });
    fixture = TestBed.createComponent(MoviesWatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
