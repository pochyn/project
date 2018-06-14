import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrTopBarComponent } from './or-top-bar.component';

describe('OrTopBarComponent', () => {
  let component: OrTopBarComponent;
  let fixture: ComponentFixture<OrTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
