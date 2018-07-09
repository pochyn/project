import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloTopBarComponent } from './solo-top-bar.component';

describe('SoloTopBarComponent', () => {
  let component: SoloTopBarComponent;
  let fixture: ComponentFixture<SoloTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
