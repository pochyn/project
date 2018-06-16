import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrRegionsComponent } from './gr-regions.component';

describe('GrRegionsComponent', () => {
  let component: GrRegionsComponent;
  let fixture: ComponentFixture<GrRegionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrRegionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
