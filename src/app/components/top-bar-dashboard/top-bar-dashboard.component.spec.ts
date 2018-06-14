import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarDashboardComponent } from './top-bar-dashboard.component';

describe('TopBarDashboardComponent', () => {
  let component: TopBarDashboardComponent;
  let fixture: ComponentFixture<TopBarDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBarDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
