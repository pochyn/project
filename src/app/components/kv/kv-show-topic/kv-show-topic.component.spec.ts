import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvShowTopicComponent } from './kv-show-topic.component';

describe('KvShowTopicComponent', () => {
  let component: KvShowTopicComponent;
  let fixture: ComponentFixture<KvShowTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvShowTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvShowTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
