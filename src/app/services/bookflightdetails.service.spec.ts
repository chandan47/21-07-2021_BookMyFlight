import { TestBed } from '@angular/core/testing';

import { BookflightdetailsService } from './bookflightdetails.service';

describe('BookflightdetailsService', () => {
  let service: BookflightdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookflightdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
