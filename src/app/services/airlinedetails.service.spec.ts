import { TestBed } from '@angular/core/testing';

import { AirlinedetailsService } from './airlinedetails.service';

describe('AirlinedetailsService', () => {
  let service: AirlinedetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirlinedetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
