import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvDashboardComponent } from './kv-dashboard.component';

describe('KvDashboardComponent', () => {
  let component: KvDashboardComponent;
  let fixture: ComponentFixture<KvDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
