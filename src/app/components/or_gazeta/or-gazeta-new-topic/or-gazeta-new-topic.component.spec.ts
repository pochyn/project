import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrGazetaNewTopicComponent } from './or-gazeta-new-topic.component';

describe('OrGazetaNewTopicComponent', () => {
  let component: OrGazetaNewTopicComponent;
  let fixture: ComponentFixture<OrGazetaNewTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrGazetaNewTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrGazetaNewTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
