import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrPostsComponent } from './gr-posts.component';

describe('GrPostsComponent', () => {
  let component: GrPostsComponent;
  let fixture: ComponentFixture<GrPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
