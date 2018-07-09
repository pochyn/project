import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloCommentsComponent } from './solo-comments.component';

describe('SoloCommentsComponent', () => {
  let component: SoloCommentsComponent;
  let fixture: ComponentFixture<SoloCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
