import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaplanComponent } from './mediaplan.component';

describe('MediaplanComponent', () => {
  let component: MediaplanComponent;
  let fixture: ComponentFixture<MediaplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
