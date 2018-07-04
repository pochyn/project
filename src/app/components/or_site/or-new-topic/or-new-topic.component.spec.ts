import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrNewTopicComponent } from './or-new-topic.component';

describe('OrNewTopicComponent', () => {
  let component: OrNewTopicComponent;
  let fixture: ComponentFixture<OrNewTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrNewTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrNewTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
