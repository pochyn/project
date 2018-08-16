import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllShowMediaComponent } from './all-show-media.component';

describe('AllShowMediaComponent', () => {
  let component: AllShowMediaComponent;
  let fixture: ComponentFixture<AllShowMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllShowMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllShowMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
