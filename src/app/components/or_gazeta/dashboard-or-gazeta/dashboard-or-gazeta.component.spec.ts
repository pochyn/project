import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrGazetaComponent } from './dashboard-or-gazeta.component';

describe('DashboardOrGazetaComponent', () => {
  let component: DashboardOrGazetaComponent;
  let fixture: ComponentFixture<DashboardOrGazetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOrGazetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOrGazetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
