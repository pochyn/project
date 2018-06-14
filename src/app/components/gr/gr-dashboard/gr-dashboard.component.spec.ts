import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrDashboardComponent } from './gr-dashboard.component';

describe('GrDashboardComponent', () => {
  let component: GrDashboardComponent;
  let fixture: ComponentFixture<GrDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
