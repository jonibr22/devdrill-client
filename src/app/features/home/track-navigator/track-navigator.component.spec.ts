import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackNavigatorComponent } from './track-navigator.component';

describe('TrackNavigatorComponent', () => {
  let component: TrackNavigatorComponent;
  let fixture: ComponentFixture<TrackNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
