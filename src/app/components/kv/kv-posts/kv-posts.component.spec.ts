import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvPostsComponent } from './kv-posts.component';

describe('KvPostsComponent', () => {
  let component: KvPostsComponent;
  let fixture: ComponentFixture<KvPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
