import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrTopbarComponent } from './gr-topbar.component';

describe('GrTopbarComponent', () => {
  let component: GrTopbarComponent;
  let fixture: ComponentFixture<GrTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
