import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloArchieveComponent } from './solo-archieve.component';

describe('SoloArchieveComponent', () => {
  let component: SoloArchieveComponent;
  let fixture: ComponentFixture<SoloArchieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloArchieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloArchieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
