import { TestBed } from '@angular/core/testing';

import { AddToWatchListFromDetailsService } from './add-to-watch-list-from-details.service';

describe('AddToWatchListFromDetailsService', () => {
  let service: AddToWatchListFromDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddToWatchListFromDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
