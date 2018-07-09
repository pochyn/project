import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloLvivComponent } from './solo-lviv.component';

describe('SoloLvivComponent', () => {
  let component: SoloLvivComponent;
  let fixture: ComponentFixture<SoloLvivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloLvivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloLvivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
