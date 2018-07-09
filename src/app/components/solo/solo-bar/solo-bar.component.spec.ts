import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloBarComponent } from './solo-bar.component';

describe('SoloBarComponent', () => {
  let component: SoloBarComponent;
  let fixture: ComponentFixture<SoloBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
