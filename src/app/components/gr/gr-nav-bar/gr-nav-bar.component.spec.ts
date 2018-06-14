import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrNavBarComponent } from './gr-nav-bar.component';

describe('GrNavBarComponent', () => {
  let component: GrNavBarComponent;
  let fixture: ComponentFixture<GrNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
