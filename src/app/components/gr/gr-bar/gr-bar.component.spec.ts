import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrBarComponent } from './gr-bar.component';

describe('GrBarComponent', () => {
  let component: GrBarComponent;
  let fixture: ComponentFixture<GrBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
