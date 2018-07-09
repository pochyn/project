import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloDashboardComponent } from './solo-dashboard.component';

describe('SoloDashboardComponent', () => {
  let component: SoloDashboardComponent;
  let fixture: ComponentFixture<SoloDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
