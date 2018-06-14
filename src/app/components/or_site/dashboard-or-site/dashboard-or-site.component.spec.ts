import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrSiteComponent } from './dashboard-or-site.component';

describe('DashboardOrSiteComponent', () => {
  let component: DashboardOrSiteComponent;
  let fixture: ComponentFixture<DashboardOrSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOrSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOrSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
