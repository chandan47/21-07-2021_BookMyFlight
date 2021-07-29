import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchflightresultsComponent } from './searchflightresults.component';

describe('SearchflightresultsComponent', () => {
  let component: SearchflightresultsComponent;
  let fixture: ComponentFixture<SearchflightresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchflightresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchflightresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
