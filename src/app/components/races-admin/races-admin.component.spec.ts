import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesAdminComponent } from './races-admin.component';

describe('RacesAdminComponent', () => {
  let component: RacesAdminComponent;
  let fixture: ComponentFixture<RacesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
