import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloNavbarComponent } from './solo-navbar.component';

describe('SoloNavbarComponent', () => {
  let component: SoloNavbarComponent;
  let fixture: ComponentFixture<SoloNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
