import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloMediaComponent } from './solo-media.component';

describe('SoloMediaComponent', () => {
  let component: SoloMediaComponent;
  let fixture: ComponentFixture<SoloMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
