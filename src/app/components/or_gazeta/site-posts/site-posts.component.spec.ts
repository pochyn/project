import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePostsComponent } from './site-posts.component';

describe('SitePostsComponent', () => {
  let component: SitePostsComponent;
  let fixture: ComponentFixture<SitePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
