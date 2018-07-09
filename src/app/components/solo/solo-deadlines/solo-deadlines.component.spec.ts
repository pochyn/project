import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloDeadlinesComponent } from './solo-deadlines.component';

describe('SoloDeadlinesComponent', () => {
  let component: SoloDeadlinesComponent;
  let fixture: ComponentFixture<SoloDeadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloDeadlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloDeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
