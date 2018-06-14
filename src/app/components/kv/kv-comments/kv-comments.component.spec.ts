import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvCommentsComponent } from './kv-comments.component';

describe('KvCommentsComponent', () => {
  let component: KvCommentsComponent;
  let fixture: ComponentFixture<KvCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
