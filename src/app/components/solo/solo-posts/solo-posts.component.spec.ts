import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloPostsComponent } from './solo-posts.component';

describe('SoloPostsComponent', () => {
  let component: SoloPostsComponent;
  let fixture: ComponentFixture<SoloPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
