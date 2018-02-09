import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesVotingComponent } from './races-voting.component';

describe('RacesVotingComponent', () => {
  let component: RacesVotingComponent;
  let fixture: ComponentFixture<RacesVotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacesVotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacesVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
