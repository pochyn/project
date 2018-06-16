import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrLvivComponent } from './gr-lviv.component';

describe('GrLvivComponent', () => {
  let component: GrLvivComponent;
  let fixture: ComponentFixture<GrLvivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrLvivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrLvivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
