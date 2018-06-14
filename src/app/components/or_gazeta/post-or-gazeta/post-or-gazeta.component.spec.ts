import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOrGazetaComponent } from './post-or-gazeta.component';

describe('PostOrGazetaComponent', () => {
  let component: PostOrGazetaComponent;
  let fixture: ComponentFixture<PostOrGazetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOrGazetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOrGazetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
