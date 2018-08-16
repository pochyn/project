import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GMediaComponent } from './g-media.component';

describe('GMediaComponent', () => {
  let component: GMediaComponent;
  let fixture: ComponentFixture<GMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
