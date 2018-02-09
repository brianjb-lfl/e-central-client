import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesResultsComponent } from './races-results.component';

describe('RacesResultsComponent', () => {
  let component: RacesResultsComponent;
  let fixture: ComponentFixture<RacesResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacesResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
