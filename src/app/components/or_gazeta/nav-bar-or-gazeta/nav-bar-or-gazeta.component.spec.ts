import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarOrGazetaComponent } from './nav-bar-or-gazeta.component';

describe('NavBarOrGazetaComponent', () => {
  let component: NavBarOrGazetaComponent;
  let fixture: ComponentFixture<NavBarOrGazetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarOrGazetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarOrGazetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
