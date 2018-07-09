import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LvivComponent } from './lviv.component';

describe('LvivComponent', () => {
  let component: LvivComponent;
  let fixture: ComponentFixture<LvivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LvivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LvivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
