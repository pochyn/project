import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrMediaComponent } from './gr-media.component';

describe('GrMediaComponent', () => {
  let component: GrMediaComponent;
  let fixture: ComponentFixture<GrMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
