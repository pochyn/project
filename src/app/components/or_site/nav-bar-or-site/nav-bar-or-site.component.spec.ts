import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarOrSiteComponent } from './nav-bar-or-site.component';

describe('NavBarOrSiteComponent', () => {
  let component: NavBarOrSiteComponent;
  let fixture: ComponentFixture<NavBarOrSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarOrSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarOrSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
