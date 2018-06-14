import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvNewTopicComponent } from './kv-new-topic.component';

describe('KvNewTopicComponent', () => {
  let component: KvNewTopicComponent;
  let fixture: ComponentFixture<KvNewTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvNewTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvNewTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
