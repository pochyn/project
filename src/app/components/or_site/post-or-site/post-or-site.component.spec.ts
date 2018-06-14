import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOrSiteComponent } from './post-or-site.component';

describe('PostOrSiteComponent', () => {
  let component: PostOrSiteComponent;
  let fixture: ComponentFixture<PostOrSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOrSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOrSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
